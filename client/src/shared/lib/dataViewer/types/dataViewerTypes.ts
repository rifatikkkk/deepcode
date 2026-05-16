export type TabType = "Пользователи" | "Посты";
export type CountItemsType = 10 | 25 | 50;

export type DataViewerContextType = {
  valueTab: TabType;
  setValueTab: (tab: TabType) => void;
  countItems: CountItemsType;
  setCountItems: (size: CountItemsType) => void;
};
