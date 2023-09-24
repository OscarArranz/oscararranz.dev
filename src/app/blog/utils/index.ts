import matter from "gray-matter";
import fs from "node:fs/promises";
import path from "node:path";

interface PostPath {
  dir: string;
  name: string;
  ext: string;
}

interface PostData {
  title: string;
  content: any;
}

type PostPaths = PostPath[];

export const getPostPaths = async (): Promise<PostPaths> => {
  const postsPath = await fs.readdir("./posts/", { recursive: true });

  const postPaths = Promise.all(
    postsPath
      .filter((postFile) => path.extname(postFile) === ".mdx")
      .map(async (postFile) => {
        const { dir, name, ext } = path.parse(path.relative(".", postFile));

        return { dir, name, ext };
      }),
  );

  return postPaths;
};

export const getPost = async (slug: string): Promise<PostData> => {
  const postPath = path.join("./posts/", slug);
  const postFileContent = await fs.readFile(postPath);
  const { data, content } = matter(postFileContent);

  return { ...data, content } as PostData;
};
