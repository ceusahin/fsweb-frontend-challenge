/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { data } from "../../data";

export const DataContext = createContext(data);

export function DataContextProvider({ children }) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
