import { useContext } from "react";
import { DataViewerContext } from "../context/dataViewerContext";

export const useDataViewer = () => {
  const context = useContext(DataViewerContext);

  if (context === undefined) {
    throw new Error("Context не найден");
  }

  return context;
};
