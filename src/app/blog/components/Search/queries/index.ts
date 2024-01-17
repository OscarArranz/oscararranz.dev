export const querySearchResults = async (searchQuery: string) => {
  const response = await fetch(`api/posts/search?searchQuery=${searchQuery}`);

  if (response.ok) {
    const body = await response.json();

    return body.searchResults;
  }

  return [];
};
