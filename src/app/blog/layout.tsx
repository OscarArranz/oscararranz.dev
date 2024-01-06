import BlogNavigator from './components/BlogNavigator';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between h-full w-full mt-32">
      <div className="hidden md:block">
        <BlogNavigator />
      </div>
      <section className="w-full flex justify-center pr-10 pl-10 md:pl-0 xl:pr-0">
        <div className="prose dark:prose-invert w-auto m-x-2 xl:max-w-[65ch] xl:w-auto">
          {children}
        </div>
        <div className="hidden xl:block w-[20rem]" />
      </section>
    </div>
  );
};

export default BlogLayout;
