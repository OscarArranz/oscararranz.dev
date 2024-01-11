// import BlogNavigator from './components/BlogNavigator';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between h-full w-full">
      <section className="w-full flex">
        {children}
        <div className="hidden xl:block w-[20rem]" />
      </section>
      {/* <div className="hidden md:block">
        <BlogNavigator />
      </div> */}
    </div>
  );
};

export default BlogLayout;
