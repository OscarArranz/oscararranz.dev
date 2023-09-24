import Link from "next/link";
import { getPost } from "../utils";
import path from "path";

interface PostEntryProps {
  url: string;
  key: string;
}

const PostEntry = async ({ url, key }: PostEntryProps) => {
  const { title } = await getPost(path.normalize(`./${url}.mdx`));
  return (
    <li key={key}>
      <Link href={`blog/${url}`}>{title}</Link>
    </li>
  );
};

export default PostEntry;
