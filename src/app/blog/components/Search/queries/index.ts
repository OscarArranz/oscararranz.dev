export const querySearchResults = async (searchQuery: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/posts/search?searchQuery=${searchQuery}`
  );

  if (response.ok) {
    const body = await response.json();

    return body.searchResults;
  }

  return [];
};
