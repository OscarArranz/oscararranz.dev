import { MDXRemote } from 'next-mdx-remote/rsc';
import { PostData, getPost } from '../../../posts';
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
  const { content } = (await getPost(
    path.normalize(`./${params.slug.join('/')}.mdx`)
  )) as PostData;

  return <MDXRemote source={content} components={components} />;
};

export default BlogPost;
