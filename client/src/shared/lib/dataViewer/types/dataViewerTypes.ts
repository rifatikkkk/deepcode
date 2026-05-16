export type TabType = "Пользователи" | "Посты";
export type CountItemsType = 10 | 25 | 50;
export type ValuePagePosts = number;
export type ValuePageUsers = number;

export type DataViewerContextType = {
  valueTab: TabType;
  setValueTab: (tab: TabType) => void;
  countItems: CountItemsType;
  setCountItems: (size: CountItemsType) => void;
  currentPagePosts: ValuePagePosts;
  setCurrentPagePosts: (page: number) => void;
  currentPageUsers: ValuePageUsers;
  setCurrentPageUsers: (page: number) => void;
};
