"use client";

import { useState, type ReactNode } from "react";
import {
  DataViewerContext,
  type TabType,
  type CountItemsType,
  type ValuePagePosts,
  type ValuePageUsers,
} from "@/shared/lib";

export const MainPageProvider = ({ children }: { children: ReactNode }) => {
  const [valueTab, setValueTab] = useState<TabType>("Пользователи");
  const [countItems, setCountItems] = useState<CountItemsType>(10);
  const [currentPagePosts, setCurrentPagePosts] = useState<ValuePagePosts>(1);
  const [currentPageUsers, setCurrentPageUsers] = useState<ValuePageUsers>(1);

  return (
    <DataViewerContext.Provider
      value={{
        valueTab,
        setValueTab,
        countItems,
        setCountItems,
        currentPagePosts,
        setCurrentPagePosts,
        currentPageUsers,
        setCurrentPageUsers,
      }}
    >
      {children}
    </DataViewerContext.Provider>
  );
};
