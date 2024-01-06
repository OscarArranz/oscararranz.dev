'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { PostSearchResultsResponse } from '../../../../posts';

interface SearchProps {
  searchResults: PostSearchResultsResponse | null;
  setSearchResults: Dispatch<SetStateAction<PostSearchResultsResponse | null>>;
}

const Search = ({ searchResults, setSearchResults }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [inputIsFocused, setInputIsFocused] = useState(false);

  return (
    <div className="p-4 md:p-0 w-full md:w-72 md:relative">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSearchResults={setSearchResults}
        setInputIsFocused={setInputIsFocused}
      />
      {searchResults && searchQuery !== '' && inputIsFocused && (
        <div className="hidden md:block">
          <SearchResults searchResults={searchResults} />
        </div>
      )}
      {searchResults && searchQuery !== '' && (
        <div className="block md:hidden">
          <SearchResults searchResults={searchResults} />
        </div>
      )}
    </div>
  );
};

export default Search;
