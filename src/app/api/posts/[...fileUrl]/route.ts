import path from 'path';
import { getPost } from '../../../../utils/posts';

export const GET = async (
  _request: Request,
  { params }: { params: { fileUrl: string[] } }
) => {
  const post = await getPost(
    path.normalize(`./${params.fileUrl.join('/')}.mdx`)
  );

  return Response.json({ post });
};
