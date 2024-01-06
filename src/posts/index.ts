import matter from 'gray-matter';
import fs from 'node:fs/promises';
import path from 'node:path';

export interface PostPath {
  dir: string;
  name: string;
  ext: string;
}

export interface PostData {
  title: string;
  content: any;
}

export type PostSearchResultContent = {
  [lineNumber: string]: string;
};

export interface PostSearchResult {
  title: string;
  content?: PostSearchResultContent;
}

export type PostSearchResults = {
  [url: string]: PostSearchResult;
};

export type PostSearchResultsResponse = {
  searchResults: PostSearchResults;
  searchQuery: string;
};

export type PostPaths = PostPath[];

export const getPostPaths = async (): Promise<PostPaths> => {
  const postsPath = await fs.readdir('./posts/', { recursive: true });

  const postPaths = Promise.all(
    postsPath
      .filter((postFile) => path.extname(postFile) === '.mdx')
      .map(async (postFile) => {
        const { dir, name, ext } = path.parse(path.relative('.', postFile));

        return { dir, name, ext };
      })
  );

  return postPaths;
};

export const getPost = async (fileUrl: string): Promise<PostData | null> => {
  const postPath = path.join('./posts/', fileUrl);
  try {
    const postFileContent = await fs.readFile(postPath);
    const { data, content } = matter(postFileContent);

    return { ...data, content } as PostData;
  } catch (error) {
    return null;
  }
};
