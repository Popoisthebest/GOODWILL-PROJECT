import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RejectionNotice from "./pages/RejectionNotice";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RejectionNotice />
  </StrictMode>
);
