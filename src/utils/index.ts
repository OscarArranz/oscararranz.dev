export const debounce = (func: Function, wait: number = 300) => {
  let timeout: any;

  return function executedFunction(...args: any[]) {
    clearTimeout(timeout);

    timeout = setTimeout(() => func(...args), wait);
  };
};

// Function to remove markdown from a string (used for search)
export const removeMarkdown = (markdown: string) => {
  const regex = /(?:__|[*#])|\[(.*?)\]\(.*?\)/g;

  return markdown.replaceAll(regex, '$1');
};
