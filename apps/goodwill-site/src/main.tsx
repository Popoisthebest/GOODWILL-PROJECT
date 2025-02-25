import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CodeTest from "./pages/CodeTest";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CodeTest />
  </StrictMode>
);
