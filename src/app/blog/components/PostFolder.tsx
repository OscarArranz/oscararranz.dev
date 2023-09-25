"use client";

import { useState } from "react";
import { computeEntryIndentation } from "./utils";
import ArrowRightIcon from "remixicon-react/ArrowRightSLineIcon";

interface PostFolderProps {
  title: string;
  children: React.ReactNode;
  url: string;
  isRootFolder: boolean;
  key: string;
}

const PostFolder = ({
  title,
  children,
  url,
  isRootFolder,
  key,
}: PostFolderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  if (isRootFolder) {
    return (
      <>
        <ul className="flex flex-col w-full gap-2">{children}</ul>
      </>
    );
  }

  return (
    <li key={key} style={{ marginLeft: computeEntryIndentation(url) }}>
      <button
        className="flex w-full justify-between cursor-pointer items-center hover:bg-blue-500 dark:hover:bg-gray-800 hover:text-white px-2 py-1 rounded transition-colors"
        onClick={toggleOpen}
      >
        <span>{title}</span>
        <div className="-mr-1 ml-4 hover:bg-blue-400 dark:hover:bg-gray-700 rounded transition-colors">
          <ArrowRightIcon
            className={`w-5 h-5 ${isOpen ? "rotate-90" : ""
              } transition-transform`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="relative mt-2">
          <div className="absolute w-[1px] h-[95%] top-[5%] left-2 bg-gray-800" />
          <ul className="flex flex-col gap-2">{children}</ul>
        </div>
      )}
    </li>
  );
};

export default PostFolder;
