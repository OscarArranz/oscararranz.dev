import path from 'path';
import { getPost } from '../../../../utils/posts';
import { getPublicFilePath } from '../../../../utils/file';
import { NextResponse } from 'next/server';

export const GET = async (
  _request: Request,
  { params }: { params: { fileUrl: string[] } }
) => {
  const post = await getPost(
    getPublicFilePath(path.normalize(`./${params.fileUrl.join('/')}.mdx`))
  );

  return NextResponse.json({ post });
};
