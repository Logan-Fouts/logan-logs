import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  if (req.method === 'GET') {
    try {
      const [rows] = await connection.execute('SELECT * FROM comments WHERE post_slug = ?', [req.query.slug]);
      await connection.end();
      res.status(200).json(rows);
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Error fetching comments' });
    }
  } else if (req.method === 'POST') {
    try {
      const { user, comment, post_slug } = req.body;
      const date = new Date().toISOString();
      await connection.execute(
        'INSERT INTO comments (post_slug, date, user, comment) VALUES (?, ?, ?, ?)',
        [post_slug, date, user, comment]
      );
      await connection.end();
      res.status(201).json({ message: 'Comment added successfully' });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Error adding comment' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
