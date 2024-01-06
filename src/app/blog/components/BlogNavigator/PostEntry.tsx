import Link from 'next/link';
import { computeEntryIndentation } from './utils';
import { PostData } from '../../../../posts';

export interface CommonPostEntryProps {
  url: string;
}

interface PostEntryProps extends CommonPostEntryProps {
  post?: PostData;
}

const PostEntry = ({ post, url }: PostEntryProps) => {
  if (post) {
    return (
      <li key={url}>
        <Link
          href={`/blog/${url}`}
          className="block px-2 py-1 hover:bg-blue-500 dark:hover:bg-gray-800 hover:text-white rounded transition-colors"
          style={{ marginLeft: computeEntryIndentation(url) }}
        >
          {post.title}
        </Link>
      </li>
    );
  }

  return <></>;
};

export default PostEntry;
