export interface AppContextType {
  isOpenFileLoader: boolean;
  setIsOpenFileLoader: (isOpenFileLoader: boolean) => void;
  pdfDocument: unknown | null;
  setPdfDocument: (pdfDocument: unknown | null) => void;
}
