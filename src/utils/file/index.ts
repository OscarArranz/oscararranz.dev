import path from 'node:path';

/**
 * Retrieves the public file path for a given original path.
 * We need to do this for Vercel, otherwise it won't find the file.
 *
 * @param {string} originalPath - The original path of the file.
 * @return {string} The resolved public file path.
 */
export const getPublicFilePath = (originalPath: string): string => {
  const newPath = originalPath.replace('./public', '');

  return path.resolve('./public', newPath);
};
