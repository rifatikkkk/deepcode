import { Tab } from "@/shared/ui";
import { useDataViewer, type TabType } from "@/shared/lib";

const listTab: TabType[] = ["Пользователи", "Посты"];

export const SelectTabs = () => {
  const { valueTab, setValueTab } = useDataViewer();
  return (
    <Tab valueTab={valueTab} itemsTab={listTab} onChangeTab={setValueTab} />
  );
};
