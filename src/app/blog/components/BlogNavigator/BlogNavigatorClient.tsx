'use client';

import { useEffect, useMemo, useState } from 'react';
import { PostPaths } from '../../../../posts';
import { queryPostPaths } from './queries';
import BlogNavigator from './BlogNavigator';
import { createMainNavigationEntry } from './utils';
import PostEntryClient from './PostEntryClient';

export const BlogNavigatorClient = () => {
  const [postPaths, setPostPaths] = useState<PostPaths>([]);
  const mainNavigatorEntry = useMemo(
    () => createMainNavigationEntry(postPaths),
    [postPaths]
  );

  useEffect(() => {
    (async () => {
      const queriedPostPaths = await queryPostPaths();

      setPostPaths(queriedPostPaths);
    })();
  }, []);

  if (!postPaths) {
    return <></>;
  }

  return (
    <BlogNavigator
      postEntryComponent={PostEntryClient}
      mainNavigatorEntry={mainNavigatorEntry}
    />
  );
};
