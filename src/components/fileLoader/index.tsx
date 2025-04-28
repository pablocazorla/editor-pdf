import AppContext from "@/context/context";
import { useContext } from "react";
import Loader from "./loader";

const FileLoader = () => {
  const { isOpenFileLoader } = useContext(AppContext);

  if (!isOpenFileLoader) {
    return null;
  }

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full bg-gray-900/50 flex items-center justify-center animate-fade-in">
      <div className="card p-3 shadow-lg">
        <Loader />
      </div>
    </div>
  );
};

export default FileLoader;
