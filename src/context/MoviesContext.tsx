import React, { ReactNode, SetStateAction } from "react";

interface MoviesContextProps {
  data: [];
  setData: React.Dispatch<SetStateAction<[]>>;
}

export const MoviesContext = React.createContext<
  MoviesContextProps | undefined
>(undefined);

interface MoviesStorageProps {
  children: ReactNode;
}

export const MoviesStorage: React.FC<MoviesStorageProps> = ({ children }) => {
  const [data, setData] = React.useState<[]>([]);
console.log("eu sou global")
  return (
    <MoviesContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
