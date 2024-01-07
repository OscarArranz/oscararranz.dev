import { getPostPaths } from '../../../../posts';

export const GET = async () => {
  const postPaths = await getPostPaths();

  return Response.json({ postPaths });
};