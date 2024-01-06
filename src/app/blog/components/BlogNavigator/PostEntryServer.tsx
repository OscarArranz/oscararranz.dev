import PostEntry, { CommonPostEntryProps } from './PostEntry';
import { queryPost } from './queries';

const PostEntryServer = async ({ url }: CommonPostEntryProps) => {
  const post = await queryPost(url);

  return <PostEntry post={post} url={url} />;
};

export default PostEntryServer;
