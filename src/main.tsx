import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AppContextProvider from "./context/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
