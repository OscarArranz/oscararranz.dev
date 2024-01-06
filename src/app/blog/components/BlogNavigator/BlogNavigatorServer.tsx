import BlogNavigator from './BlogNavigator';
import PostEntryServer from './PostEntryServer';
import { queryPostPaths } from './queries';
import { createMainNavigationEntry } from './utils';

const BlogNavigatorServer = async () => {
  const postPaths = await queryPostPaths();
  const mainNavigatorEntry = createMainNavigationEntry(postPaths);

  return (
    <BlogNavigator
      postEntryComponent={PostEntryServer}
      mainNavigatorEntry={mainNavigatorEntry}
    />
  );
};

export default BlogNavigatorServer;
