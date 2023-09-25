import { getPostPaths } from "../utils";
import PostFolder from "./PostFolder";
import PostEntry from "./PostEntry";
import SidebarEntry from "./utils/SidebarEntry";

const renderTree = (
  sideBarEntry: SidebarEntry,
  isRootFolder: boolean = false,
  key: string = "posts",
): React.ReactNode => {
  let postEntry;
  let postFolder;

  if (sideBarEntry.hasPost) {
    postEntry = <PostEntry url={sideBarEntry.url} key={key} />;
  }

  if (sideBarEntry.isFolder) {
    postFolder = (
      <PostFolder
        title={sideBarEntry.folderTitle}
        key={sideBarEntry.url + "_folder"}
        isRootFolder={isRootFolder}
        url={sideBarEntry.url}
      >
        {Array.from(sideBarEntry.entries.values()).map((entry) =>
          renderTree(entry, false, entry.url),
        )}
      </PostFolder>
    );
  }

  return (
    <>
      {postFolder}
      {postEntry}
    </>
  );
};

const BlogSidebar = async () => {
  const postPaths = await getPostPaths();
  const sidebarMainEntry = new SidebarEntry(false, "", "");

  postPaths.forEach(({ dir, name }) =>
    sidebarMainEntry.addEntry(`${dir && dir !== "" ? `${dir}/` : ""}${name}`),
  );

  return (
    <aside className="hidden md:flex box-border w-[20rem] gap-2 dark:text-white h-full p-4">
      {renderTree(sidebarMainEntry, true)}
    </aside>
  );
};

export default BlogSidebar;