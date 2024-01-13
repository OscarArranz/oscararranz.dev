import matter from 'gray-matter';
import fs from 'node:fs/promises';
import path from 'node:path';
import { getPublicFilePath } from '../file';

export interface PostPath {
  dir: string;
  name: string;
  ext: string;
}

export interface PostData {
  title: string;
  content: any;
  date: Date;
  tags: string[];
  url: string;
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

const buildPostTags = (tags: string): string[] => {
  if (!tags || tags === '') return [];

  return tags.split(', ').map((tag: string) => tag.trim());
};

export const getPostPaths = async (): Promise<PostPaths> => {
  const publicPath = getPublicFilePath('./posts/');
  const postsPath = await fs.readdir(publicPath, { recursive: true });

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
  const postPath = getPublicFilePath(path.join('./posts/', fileUrl));

  try {
    const postFileContent = await fs.readFile(postPath);
    const { data, content } = matter(postFileContent);

    const tags = buildPostTags(data.tags);

    return {
      ...data,
      content,
      tags,
      url: `/blog/${fileUrl.replace('.mdx', '')}`,
    } as PostData;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
};

export const getLatestPosts = async (limit = 5): Promise<PostData[]> => {
  const postPaths = await getPostPaths();
  const posts: PostData[] = (await Promise.all(
    postPaths
      .map(async ({ dir, name, ext }) => {
        return await getPost(path.join(dir, name + ext));
      })
      .filter((post) => post !== null)
  )) as PostData[];

  posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts.slice(0, limit);
};
