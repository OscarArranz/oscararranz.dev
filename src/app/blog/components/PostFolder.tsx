interface PostFolderProps {
  title: string;
  children: React.ReactNode;
  isRootFolder: boolean;
  key: string;
}

const PostFolder = ({
  title,
  children,
  isRootFolder,
  key,
}: PostFolderProps) => {
  if (isRootFolder) {
    return (
      <div>
        <span>{title}</span>
        <ul>{children}</ul>
      </div>
    );
  }

  return (
    <li key={key}>
      <span>{title}</span>
      <ul>{children}</ul>
    </li>
  );
};

export default PostFolder;
