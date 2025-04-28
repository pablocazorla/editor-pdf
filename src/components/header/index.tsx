import Button from "@/components/button";
import AppContext from "@/context/context";
import { useContext } from "react";

const Header = () => {
  const { setIsOpenFileLoader } = useContext(AppContext);

  return (
    <header className="header h-header p-1 grid">
      <div className="card flex items-center px-3">
        <Button onClick={() => setIsOpenFileLoader(true)}>Cargar PDF</Button>
      </div>
    </header>
  );
};
export default Header;
