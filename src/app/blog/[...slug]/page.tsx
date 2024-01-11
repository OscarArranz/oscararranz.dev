import { MDXRemote } from 'next-mdx-remote/rsc';
import { PostData, getPost } from '../../../utils/posts';
import path from 'path';
import { Code } from 'bright';
import React from 'react';

interface BlogPostProps {
  params: { slug: string[] };
}

const components = {
  pre: (props: React.PropsWithChildren) => <Code {...props} />,
};

Code.theme = {
  dark: 'material-darker',
  light: 'material-lighter',
  lightSelector: 'html.light',
};

const BlogPost = async ({ params }: BlogPostProps) => {
  const { title, date, content } = (await getPost(
    path.normalize(`./${params.slug.join('/')}.mdx`)
  )) as PostData;

  return (
    <div>
      <h1 className="text-5xl xl:text-6xl font-bold ">{title}</h1>
      <h3 className="text-xl mt-4 mb-16 font-semibold text-black dark:text-white text-opacity-50 dark:text-opacity-50">
        {date.toDateString()}
      </h3>
      <div className="text-lg prose prose-strong:text-blue-600 dark:prose-strong:text-blue-400 dark:prose-invert w-auto m-x-2 xl:max-w-[65ch] xl:w-auto text-justify">
        <MDXRemote source={content} components={components} />
      </div>
    </div>
  );
};

export default BlogPost;
