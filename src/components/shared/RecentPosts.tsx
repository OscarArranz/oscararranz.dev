import Link from 'next/link';
import { getLatestPosts } from '../../utils/posts';

const RecentPosts = async () => {
  const posts = await getLatestPosts();

  return (
    <div className="relative z-0">
      <h2 className="text-3xl xl:text-4xl font-bold mb-10 underline">
        Recent Posts
      </h2>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.title}
            href={post.url}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:scale-[102%] hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          >
            <span className="block mb-4 text-xl font-semibold">
              {post.title}
            </span>

            <div className="flex flex-col gap-4 md:flex-row md:gap-0 w-full md:justify-between">
              <span className="block font-medium text-sm text-black text-opacity-50 dark:text-white dark:text-opacity-50">
                {post.date.toDateString()}
              </span>
              <div>
                {post.tags.map((tag) => (
                  <span
                    key={tag.slice(1)}
                    className="inline-block font-medium mr-2 text-sm text-blue-600 dark:text-blue-400 underline"
                  >
                    {`#${tag}`}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
