import React, { createContext, useState, useContext, ReactNode } from "react";

// Tipagem do contexto
interface SearchContextType {
  searchTerm: string;
  updateSearchTerm: (newValue: string) => void;
}

// Criação do contexto
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Provider do contexto
interface SearchProviderProps {
  children: ReactNode;
}

export const SearchContextProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchTerm, setValue] = useState("");

  const updateSearchTerm = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, updateSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext deve ser usado dentro de um MyProvider");
  }
  return context;
};
