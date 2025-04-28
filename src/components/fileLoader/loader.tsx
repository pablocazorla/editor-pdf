import AppContext from "@/context/context";
import { type ChangeEvent, useContext, useState } from "react";
import Button from "../button";

interface loadingTask {
  promise: Promise<unknown>;
}

declare let pdfjsLib: {
  getDocument: (options: { data: string }) => loadingTask;
};

const Loader = () => {
  const { setIsOpenFileLoader, setPdfDocument } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  const [pdfToLoad, setPdfToLoad] = useState<unknown | null>(null);

  const handleFileChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files?.[0];

    if (!file || file.type != "application/pdf") {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = (fileLoadedEvent) => {
      const base64 = fileLoadedEvent.target?.result as string;

      if (typeof base64 === "string") {
        const loadingTask = pdfjsLib.getDocument({
          data: atob(base64.substring("data:application/pdf;base64,".length)),
        });

        loadingTask.promise.then(function (pdf) {
          setIsLoading(false);
          setPdfToLoad(pdf);
        });
      }
    };
    setIsLoading(true);
    fileReader.readAsDataURL(file);
  };

  const loadPDF = () => {
    setPdfDocument(pdfToLoad);
    setIsOpenFileLoader(false);
  };

  return (
    <div className="w-xl relative">
      <h2 className="text-center font-bold text-xl border-b border-gray-600 pb-2">
        Cargar PDF
      </h2>
      <div className="p-4">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="bg-gray-900 rounded-md p-2 text-sm w-full"
        />
      </div>
      <footer className="flex items-center justify-center gap-5 border-t border-gray-600 pt-2 text-lg">
        <button
          className="cursor-pointer opacity-60 hover:opacity-100"
          onClick={() => setIsOpenFileLoader(false)}
        >
          Cancelar
        </button>
        <Button onClick={loadPDF} disabled={pdfToLoad == null}>
          Cargar
        </Button>
      </footer>
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-700/70 backdrop-blur-xs" />
      )}
    </div>
  );
};

export default Loader;
