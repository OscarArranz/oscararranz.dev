import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPost } from '../../../posts';
import path from 'path';

interface BlogPostProps {
  params: { slug: string[] };
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const { content } = await getPost(
    path.normalize(`./${params.slug.join('/')}.mdx`)
  );
  return <MDXRemote source={content} />;
};

export default BlogPost;
