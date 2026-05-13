import { Tabs, type TabsPropOnChange } from "@consta/uikit/Tabs";
import { type FC } from "react";

type CustomTabsProps = {
  valueTab?: string | null | undefined;
  itemsTab: string[];
  onChangeTab: TabsPropOnChange<string>;
};

export const CustomTabs: FC<CustomTabsProps> = ({
  valueTab,
  itemsTab,
  onChangeTab,
}) => {
  return (
    <Tabs
      view="clear"
      value={valueTab}
      onChange={onChangeTab}
      items={itemsTab}
      getItemLabel={(item) => item}
      style={{ marginRight: "10px" }}
    />
  );
};
