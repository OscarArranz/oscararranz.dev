import { PostData, PostPaths } from '../../../../../posts';

export const queryPostPaths = async (): Promise<PostPaths> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/posts/paths`);

  if (response.ok) {
    return (await response.json())?.postPaths;
  }

  return [];
};

export const queryPost = async (
  fileUrl: string
): Promise<PostData | undefined> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/posts/${fileUrl}`
  );

  if (response.ok) {
    return (await response.json()).post;
  }

  return undefined;
};
