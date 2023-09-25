import Link from "next/link";
import { getPost } from "../utils";
import path from "path";
import { computeEntryIndentation } from "./utils";

interface PostEntryProps {
  url: string;
  key: string;
}

const PostEntry = async ({ url, key }: PostEntryProps) => {
  const { title } = await getPost(path.normalize(`./${url}.mdx`));

  return (
    <li key={key}>
      <Link
        href={`/blog/${url}`}
        className="block px-2 py-1 hover:bg-blue-500 dark:hover:bg-gray-800 hover:text-white rounded transition-colors"
        style={{ marginLeft: computeEntryIndentation(url) }}
      >
        {title}
      </Link>
    </li>
  );
};

export default PostEntry;
