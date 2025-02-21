import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SucceedNotice from "./pages/SucceedNotice";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SucceedNotice />
  </StrictMode>
);
