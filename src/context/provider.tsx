import { useState } from "react";
import AppContext from "./context";

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenFileLoader, setIsOpenFileLoader] = useState(false);

  const [pdfDocument, setPdfDocument] = useState<unknown | null>(null);

  return (
    <AppContext.Provider
      value={{
        isOpenFileLoader,
        setIsOpenFileLoader,
        pdfDocument,
        setPdfDocument,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
