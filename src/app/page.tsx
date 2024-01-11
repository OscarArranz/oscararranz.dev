import Greeting from '../components/pages/home/Greeting';
import RecentPosts from '../components/shared/RecentPosts';

export default function Home() {
  return (
    <div>
      <Greeting />
      <div className="mt-24 xl:mt-36"></div>
      <RecentPosts />
    </div>
  );
}
