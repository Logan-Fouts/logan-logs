import React, { useState, useEffect } from 'react';
import { Filter } from 'bad-words';

const filter = new Filter();

export default function Comments({ slug }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ user: '', comment: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComments();
  }, [slug]);

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comments?slug=${slug}`);
      if (!res.ok) throw new Error('Failed to fetch comments');
      setComments(await res.json());
    } catch (err) {
      setError('Error loading comments. Please try again later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (filter.isProfane(newComment.comment)) {
      setError('Please keep comments appropriate and respectful.');
      return;
    }
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newComment,
          comment: filter.clean(newComment.comment),
          post_slug: slug
        }),
      });
      if (!res.ok) throw new Error('Failed to add comment');
      setNewComment({ user: '', comment: '' });
      fetchComments();
    } catch (err) {
      setError('Failed to post comment. Please try again.');
    }
  };

  return (
    <div className="mt-8 max-w-2xl mx-auto flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <ul className="space-y-4 mb-6 w-full mt-5">
        {comments.map((comment, index) => (
          <li key={index} className="bg-slate-800 p-3 rounded shadow-sm">
            <p className="font-medium">{comment.user}</p>
            <p className="text-xs text-gray-400 mt-1">{new Date(comment.date).toLocaleString()}</p>
            <p className="text-sm mt-1">{comment.comment}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="space-y-2 w-3/4">
        <input
          type="text"
          value={newComment.user}
          onChange={(e) => setNewComment({ ...newComment, user: e.target.value })}
          placeholder="Your Name"
          className="w-full p-2 rounded bg-slate-800"
          required
        />
        <textarea
          value={newComment.comment}
          onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
          placeholder="Your Comment"
          className="w-full p-2 rounded bg-slate-800"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-600 transition">
          Post Comment
        </button>
      </form>
    </div>
  );
}
