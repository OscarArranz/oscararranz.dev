'use client';

import { Dispatch, SetStateAction, useRef, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { PostSearchResultsResponse } from '../../../../utils/posts';

interface SearchProps {
  searchResults: PostSearchResultsResponse | null;
  setSearchResults: Dispatch<SetStateAction<PostSearchResultsResponse | null>>;
}

const Search = ({ searchResults, setSearchResults }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchBarRef = useRef<HTMLInputElement>(null);

  return (
    <div className="p-4 md:p-0 w-full md:w-72 md:relative z-10">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSearchResults={setSearchResults}
        ref={searchBarRef}
      />
      {searchResults && searchQuery !== '' && (
        <div className="hidden md:block">
          <SearchResults
            searchResults={searchResults}
            searchBarRef={searchBarRef}
          />
        </div>
      )}
      {searchResults && searchQuery !== '' && (
        <div className="block md:hidden">
          <SearchResults
            searchResults={searchResults}
            searchBarRef={searchBarRef}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
