interface BlogPostProps {
  params: { slug: string[] };
}

const BlogPost = ({ params }: BlogPostProps) => {
  return <>{params.slug[2]}</>;
};

export default BlogPost;
