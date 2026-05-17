import { Tabs } from "@consta/uikit/Tabs";

type CustomTabsProps<T extends string> = {
  valueTab?: T | null | undefined;
  itemsTab: T[];
  onChangeTab: (value: T) => void;
};

export const CustomTabs = <T extends string>({
  valueTab,
  itemsTab,
  onChangeTab,
}: CustomTabsProps<T>) => {
  return (
    <Tabs
      view="clear"
      value={valueTab}
      onChange={(value) => onChangeTab(value as T)}
      items={itemsTab}
      getItemLabel={(item) => item}
      style={{ marginRight: "10px" }}
      linePosition="bottom"
    />
  );
};
