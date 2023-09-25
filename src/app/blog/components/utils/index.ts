import SidebarEntry from "./SidebarEntry";

const computeEntryIndentation = (url: string) =>
  ((url.match("/")?.length || 0) * 16).toString() + "px";

export { SidebarEntry, computeEntryIndentation };
