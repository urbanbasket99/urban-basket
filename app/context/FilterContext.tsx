import {
  createContext,
  useState,
} from "react";

export const FilterContext =
  createContext<any>(null);

export default function FilterProvider({
  children,
}: any) {
  const [category, setCategory] =
    useState("All");

  return (
    <FilterContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}