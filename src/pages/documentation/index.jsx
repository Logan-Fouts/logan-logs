import Link from "next/link";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const markdownDir = path.join(process.cwd(), "/public/markdown");
  const filenames = fs
    .readdirSync(markdownDir)
    .filter((file) => file.endsWith(".md"));

  const fileSlugs = filenames.map((filename) => filename.replace(".md", ""));
  return { props: { fileSlugs } };
}

const DocumentationIndex = ({ fileSlugs }) => {
  return (
    <ul>
      {fileSlugs.map((slug) => (
        <li key={slug}>
          <Link href={`/documentation/${slug}`}>{slug}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DocumentationIndex;
