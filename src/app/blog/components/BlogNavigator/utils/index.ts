import { PostPaths } from '../../../../../posts';
import NavigatorEntry from './NavigatorEntry';

export const computeEntryIndentation = (url: string) =>
  ((url.match('/')?.length || 0) * 16).toString() + 'px';

export const createMainNavigationEntry = (postPaths: PostPaths) => {
  const navigatorMainEntry = new NavigatorEntry(false, '', '');

  postPaths.forEach(({ dir, name }) =>
    navigatorMainEntry.addEntry(`${dir && dir !== '' ? `${dir}/` : ''}${name}`)
  );

  return navigatorMainEntry;
};

export { NavigatorEntry };
