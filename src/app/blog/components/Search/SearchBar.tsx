'use client';

import React, {
  Dispatch,
  SetStateAction,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { querySearchResults } from './queries';
import { debounce } from '../../../../utils';
import { PostSearchResultsResponse } from '../../../../utils/posts';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setSearchResults: Dispatch<SetStateAction<PostSearchResultsResponse | null>>;
}

const SearchBar = (
  { searchQuery, setSearchQuery, setSearchResults }: SearchBarProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyboardShortcut, setKeyboardShortcut] = useState('CTRL K');

  useImperativeHandle(ref, () => inputRef.current!);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getSearchResultsDebounced = useCallback(
    debounce(async (searchQuery: string) => {
      const searchResults = await querySearchResults(searchQuery);

      setSearchResults(searchResults);
    }, 1000),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    if (event.target.value === '') setSearchResults(null);
    else getSearchResultsDebounced(event.target.value);
  };

  const changeFocus = () => {
    setKeyboardShortcut((prev) => {
      if (prev === 'CTRL K') return 'ESC';
      return 'CTRL K';
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        inputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative">
      <input
        type="text"
        name="oscararranzpostsearch"
        value={searchQuery}
        onChange={handleChange}
        ref={inputRef}
        onFocus={changeFocus}
        onBlur={changeFocus}
        placeholder="Search posts..."
        className="w-full px-4 py-2 rounded-lg border-2 bg-gray-200 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-950 dark:text-white border-white dark:border-gray-800 focus:outline-0 focus:border-blue-500 dark:focus:border-gray-400 transition-colors"
      />
      <span className="absolute right-2 top-[0.57rem] select-none bg-white dark:bg-gray-950 rounded min-w-[2rem] text-center text-[8pt] px-2 py-1 font-light dark:text-gray-400 border-[1px] border-gray-400 dark:border-gray-600 tracking-wide">
        {keyboardShortcut}
      </span>
    </div>
  );
};

export default forwardRef<HTMLInputElement, SearchBarProps>(SearchBar);
