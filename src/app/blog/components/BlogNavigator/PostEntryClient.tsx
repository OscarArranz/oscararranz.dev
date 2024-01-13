'use client';

import { useEffect, useState } from 'react';
import PostEntry, { CommonPostEntryProps } from './PostEntry';
import { queryPost } from './queries';
import { PostData } from '../../../../utils/posts';

const PostEntryClient = ({ url }: CommonPostEntryProps) => {
  const [post, setPost] = useState<PostData>();

  useEffect(() => {
    (async () => {
      const post = await queryPost(url);

      setPost(post);
    })();
  }, [url]);

  if (!post) {
    <></>;
  }

  return <PostEntry post={post} url={url} />;
};

export default PostEntryClient;
