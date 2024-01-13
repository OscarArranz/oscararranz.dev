import { NextResponse } from 'next/server';
import { getPostPaths } from '../../../../utils/posts';

export const GET = async () => {
  const postPaths = await getPostPaths();

  return NextResponse.json({ postPaths });
};
