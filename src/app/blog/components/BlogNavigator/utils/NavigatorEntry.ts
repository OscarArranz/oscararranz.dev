export default class NavigatorEntry {
  private __entries: Map<string, NavigatorEntry> = new Map();
  private __folderTitle: string;

  constructor(
    // eslint-disable-next-line no-unused-vars
    private __hasPost: boolean,
    // eslint-disable-next-line no-unused-vars
    private __url: string,
    private __title: string
  ) {
    this.__folderTitle =
      __title.charAt(0).toUpperCase() + __title.slice(1).replaceAll('-', ' ');
  }

  private getEntry(path: string) {
    return this.__entries.get(path);
  }

  public addEntry(path: string, parentPath: string = '') {
    const pathFragments = path.split('/');
    const url = `${parentPath && parentPath !== '' ? `${parentPath}/` : ''}${
      pathFragments[0]
    }`;

    if (pathFragments.length <= 1) {
      const entry = this.getEntry(url);

      if (entry) {
        entry.__hasPost = true;

        return;
      }

      this.__entries.set(url, new NavigatorEntry(true, url, path));

      return;
    }

    let entry = this.getEntry(url);

    if (!entry) {
      entry = new NavigatorEntry(false, url, pathFragments[0]);
      this.__entries.set(url, entry);
    }

    entry.addEntry(pathFragments.slice(1).join('/'), url);
  }

  public get title() {
    return this.__title;
  }

  public get url() {
    return this.__url;
  }

  public get isFolder() {
    return this.entries.size > 0;
  }

  public get entries() {
    return this.__entries;
  }

  public get hasPost() {
    return this.__hasPost;
  }

  public get folderTitle() {
    return this.__folderTitle;
  }
}
