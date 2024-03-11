import { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider value={(searchText, setSearchText)}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
