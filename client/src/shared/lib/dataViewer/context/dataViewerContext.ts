import { createContext } from "react";
import type { DataViewerContextType } from "../types/dataViewerTypes";

export const DataViewerContext = createContext<
  DataViewerContextType | undefined
>(undefined);
