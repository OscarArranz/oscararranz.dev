import { MDXRemote } from 'next-mdx-remote/rsc';
import { PostData, getPost } from '../../../../utils/posts';
import path from 'path';
import { Code } from 'bright';
import React from 'react';
import { darkCodeTheme, lightCodeTheme } from '../../../../utils/codeThemes';
import Link, { LinkProps } from 'next/link';

interface BlogPostProps {
  params: { slug: string[] };
}

const components = {
  pre: (props: React.PropsWithChildren) => <Code {...props} />,
  a: (props: React.PropsWithChildren) => (
    <Link
      {...(props as LinkProps)}
      className="text-blue-600 dark:text-blue-400 hover:underline"
      target="_blank"
    />
  ),
};

Code.theme = {
  dark: darkCodeTheme,
  light: lightCodeTheme,
  lightSelector: 'html.light',
};

const BlogPost = async ({ params }: BlogPostProps) => {
  const { title, date, content } = (await getPost(
    path.normalize(`./${params.slug.join('/')}.mdx`),
    './private-posts'
  )) as PostData;

  return (
    <div className="w-full">
      <h1 className="text-5xl xl:text-6xl font-bold ">{title}</h1>
      <h3 className="text-xl mt-4 mb-16 font-semibold text-black dark:text-white text-opacity-50 dark:text-opacity-50">
        {date.toDateString()}
      </h3>
      <div className="text-lg prose prose:sm md:prose-md xl:prose-xl prose-h4:underline dark:prose-invert w-auto m-x-2 xl:max-w-[65ch] xl:w-auto text-justify">
        <MDXRemote source={content} components={components} />
      </div>
    </div>
  );
};

export default BlogPost;
