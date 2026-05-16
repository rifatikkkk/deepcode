"use client";

import { useState, type ReactNode } from "react";
import {
  DataViewerContext,
  type TabType,
  type CountItemsType,
} from "@/shared/lib";

export const MainPageProvider = ({ children }: { children: ReactNode }) => {
  const [valueTab, setValueTab] = useState<TabType>("Пользователи");
  const [countItems, setCountItems] = useState<CountItemsType>(10);

  return (
    <DataViewerContext.Provider
      value={{
        valueTab,
        setValueTab,
        countItems,
        setCountItems,
      }}
    >
      {children}
    </DataViewerContext.Provider>
  );
};
