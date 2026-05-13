import { type FC } from "react";

import { Tab } from "@/shared/ui";

const listTab = ["Пользователи", "Посты"];

type SelectTabsProps = {
  valueTab: string | null;
  onChangeTab: (value: string | null) => void;
};

export const SelectTabs: FC<SelectTabsProps> = ({ valueTab, onChangeTab }) => {
  return (
    <Tab valueTab={valueTab} itemsTab={listTab} onChangeTab={onChangeTab} />
  );
};
