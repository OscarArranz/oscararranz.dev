import { NextRequest } from 'next/server';
import { spawnSync } from 'child_process';
import matter from 'gray-matter';
import { readFileSync } from 'fs';
import { PostSearchResults } from '../../../../utils/posts';
import { removeMarkdown } from '../../../../utils';
import { getPublicFilePath } from '../../../../utils/file';

export const GET = async (request: NextRequest) => {
  const searchQuery = request.nextUrl.searchParams.get('searchQuery');

  if (!searchQuery) {
    return Response.json({ searchResults: {}, searchQuery });
  }

  try {
    const find = spawnSync('find', ['-type', 'f', '-name', '*.mdx'], {
      cwd: getPublicFilePath('./posts'),
    });
    const fileUrls = find.stdout.toString().split('\n').slice(0, -1);
    const grep = spawnSync(
      'grep',
      ['-n', '-i', '-E', searchQuery, ...fileUrls],
      { cwd: getPublicFilePath('./posts') }
    );
    const grepResults = grep.stdout.toString().split('\n').slice(0, -1);

    const searchResults = grepResults.reduce((prev, cur) => {
      const [fileUrl, lineNumber, ...rest] = cur.split(':');
      const { title } = matter(readFileSync(getPublicFilePath(fileUrl))).data;
      const content = rest.join(':');

      return {
        ...prev,
        [fileUrl.replaceAll('./posts', '').replaceAll('.mdx', '')]: {
          ...(prev[fileUrl.replaceAll('./posts', '').replaceAll('.mdx', '')] ||
            {}),
          title,
          content: {
            ...(prev[fileUrl.replaceAll('./posts', '').replaceAll('.mdx', '')]
              ?.content || {}),
            [lineNumber]: removeMarkdown(content),
          },
        },
      };
    }, {} as PostSearchResults);

    return Response.json({ searchResults: { searchResults, searchQuery } });
  } catch (error) {
    return Response.json({ searchResults: {}, searchQuery });
  }
};
