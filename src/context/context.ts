import { AppContextType } from "@/types/context";
import { createContext } from "react";

const AppContext = createContext<AppContextType>({
  isOpenFileLoader: false,
  setIsOpenFileLoader: () => {},
  pdfDocument: null,
  setPdfDocument: () => {},
});
export default AppContext;
