import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const markdownDir = path.join(process.cwd(), "./../../../public/markdown/");
  const filenames = fs
    .readdirSync(markdownDir)
    .filter((file) => file.endsWith(".md"));

  return {
    props: {
      filenames,
    },
  };
}
