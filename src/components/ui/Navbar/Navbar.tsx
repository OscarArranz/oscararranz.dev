'use client';

import { useEffect, useState } from 'react';
import HamburguerMenuButton from './HamburguerMenuButton';
import { usePathname } from 'next/navigation';
import Search from '../../../app/blog/components/Search';
import { BlogNavigatorClient } from '../../../app/blog/components/BlogNavigator/BlogNavigatorClient';
import Link from 'next/link';
import { PostSearchResultsResponse } from '../../../posts';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] =
    useState<PostSearchResultsResponse | null>(null);
  const pathname = usePathname();

  const toggleOpen = () => setIsOpen((prevOpen) => !prevOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`${
        isOpen ? 'h-full md:h-auto' : ''
      } fixed w-full top-0 dark:bg-gray-950 transition-all`}
    >
      <div className="flex justify-between items-center p-4 dark:text-white">
        <Link href="/" className="text-2xl">
          Oscar Arranz
        </Link>
        <HamburguerMenuButton
          isOpen={isOpen}
          onClick={toggleOpen}
          className="hidden dark:block md:hidden"
        />
        <HamburguerMenuButton
          isOpen={isOpen}
          onClick={toggleOpen}
          color="#000000"
          className="block dark:hidden md:hidden"
        />
        <div className="hidden md:inline-block">
          <Search
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden w-full h-full absolute bg-white dark:bg-gray-950">
          <Search
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
          {(!searchResults ||
            Object.keys(searchResults.searchResults).length === 0) && (
            <BlogNavigatorClient />
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
