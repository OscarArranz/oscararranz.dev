/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server';
import { spawnSync } from 'child_process';
import matter from 'gray-matter';
import { readFileSync } from 'fs';
import { PostSearchResults } from '../../../../utils/posts';
import { removeMarkdown } from '../../../../utils';
import { getPublicFilePath } from '../../../../utils/file';
import path from 'path';

export const GET = async (request: NextRequest) => {
  const searchQuery = request.nextUrl.searchParams.get('searchQuery');

  if (!searchQuery) {
    return NextResponse.json({ searchResults: {}, searchQuery });
  }

  try {
    const find = spawnSync('/usr/bin/find', ['-type', 'f', '-name', '*.mdx'], {
      cwd: getPublicFilePath('./posts/'),
    });

    console.log(find);

    const fileUrls = find.stdout.toString().split('\n').slice(0, -1);

    console.log(fileUrls);

    const grep = spawnSync(
      '/usr/bin/grep',
      ['-n', '-i', '-H', '-E', searchQuery, ...fileUrls],
      { cwd: getPublicFilePath('./posts/') }
    );
    const grepResults = grep.stdout.toString().split('\n').slice(0, -1);

    console.log(grepResults);

    const searchResults = grepResults.reduce((prev, cur) => {
      const [fileUrl, lineNumber, ...rest] = cur.split(':');
      const { title } = matter(
        readFileSync(getPublicFilePath(path.join('./posts/', fileUrl)))
      ).data;
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

    return NextResponse.json({ searchResults: { searchResults, searchQuery } });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return NextResponse.json({ searchResults: {}, searchQuery });
  }
};
