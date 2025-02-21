import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CheckCarrer from "./pages/CheckCareer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CheckCarrer />
  </StrictMode>
);
