import PostFolder from './PostFolder';
import { CommonPostEntryProps } from './PostEntry';
import NavigatorEntry from './utils/NavigatorEntry';
import React from 'react';

type PostEntryComponent = React.ComponentType<CommonPostEntryProps>;

interface BlogNavigatorProps {
  mainNavigatorEntry: NavigatorEntry;
  postEntryComponent: PostEntryComponent;
}

const renderTree = (
  navigatorEntry: NavigatorEntry,
  PostEntryComponent: PostEntryComponent,
  isRootFolder: boolean = false
): React.ReactNode => {
  let postEntry;
  let postFolder;

  if (navigatorEntry.hasPost) {
    postEntry = (
      <PostEntryComponent
        url={navigatorEntry.url}
        key={navigatorEntry.url + '_file'}
      />
    );
  }

  if (navigatorEntry.isFolder) {
    postFolder = (
      <PostFolder
        title={navigatorEntry.folderTitle}
        key={navigatorEntry.url + '_folder'}
        isRootFolder={isRootFolder}
        url={navigatorEntry.url}
      >
        {Array.from(navigatorEntry.entries.values()).map((entry) =>
          renderTree(entry, PostEntryComponent, false)
        )}
      </PostFolder>
    );
  }

  return (
    <div key={navigatorEntry.url} className="w-full">
      {postFolder}
      {postEntry}
    </div>
  );
};

const BlogNavigator = ({
  mainNavigatorEntry,
  postEntryComponent,
}: BlogNavigatorProps) => {
  return (
    <aside className="flex box-border w-full md:w-[20rem] gap-2 dark:text-white h-full p-4">
      {renderTree(mainNavigatorEntry, postEntryComponent, true)}
    </aside>
  );
};

export default BlogNavigator;
