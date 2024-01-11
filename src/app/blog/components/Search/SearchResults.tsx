import Link from 'next/link';
import { PostSearchResultsResponse } from '../../../../utils/posts';
import './scrollbar.css';
import React, { useEffect, useRef, useState } from 'react';

interface SearchResultsProps {
  searchResults: PostSearchResultsResponse;
  searchBarRef?: React.RefObject<HTMLInputElement>;
}

interface SearchResultProps {
  title: string;
  content: string;
  url: string;
}

const mapSearchResults = (searchResults: PostSearchResultsResponse) => {
  let key = 0;

  return Object.entries(searchResults.searchResults).map(
    ([url, searchResult]) => {
      return Object.values(searchResult.content || {}).map((content) => {
        let regex;

        try {
          regex = new RegExp(`(${searchResults.searchQuery})`, 'gi');
        } catch (_error) {
          regex = searchResults.searchQuery;
        }

        return (
          <SearchResult
            title={searchResult.title.replaceAll(
              regex,
              '<span class="font-semibold text-blue-500">$1</span>'
            )}
            key={key++}
            url={url}
            content={content
              .slice(0, 120)
              .replaceAll(
                regex,
                '<span class="font-semibold text-blue-500">$1</span>'
              )}
          />
        );
      });
    }
  );
};

const SearchResult = ({ title, content, url }: SearchResultProps) => {
  return (
    <Link
      href={`/blog/${url}`}
      className="block p-4 hover:bg-blue-100 dark:hover:bg-gray-800 rounded-md"
    >
      <div className="text-xl" dangerouslySetInnerHTML={{ __html: title }} />
      {!content.startsWith('title:') && (
        <div
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </Link>
  );
};

const SearchResults = ({ searchResults, searchBarRef }: SearchResultsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchResultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const searchBarElement = searchBarRef?.current;

    if (!searchBarElement) return;

    if (searchBarElement === document.activeElement) setIsOpen(true);

    const handleFocus = () => setIsOpen(true);
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        !searchResultsRef.current?.contains(event.target as Node) &&
        !searchBarElement.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    searchBarElement.addEventListener('focus', handleFocus);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      searchBarElement.removeEventListener('focus', handleFocus);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [searchBarRef]);

  if (
    !searchResults ||
    Object.keys(searchResults.searchResults).length === 0 ||
    !isOpen
  ) {
    return null;
  }

  return (
    <div
      ref={searchResultsRef}
      className="dark:text-white mt-4 md:absolute md:w-[35rem] md:right-0 md:p-4 md:bg-gray-100 md:rounded-xl md:dark:bg-gray-900 md:max-h-96 overflow-y-scroll scrollbar shadow-2xl"
    >
      {mapSearchResults(searchResults)}
    </div>
  );
};

export default SearchResults;
