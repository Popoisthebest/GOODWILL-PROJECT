import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EssayEval from "./components/RoleInfo/EssayEval";
import EssayEvalContent from "./components/RoleInfo/EssayEvalContent";
import Verify from "./components/RoleInfo/Verify";
import End from "./components/RoleInfo/End";

const router = createBrowserRouter([
  {
    path:'/',
    children: [
      {
        path: "",
        element: <EssayEval />
      },
      {
        path: "verify",
        element: <Verify />
      },
      {
        path: "evalcontent",
        element: <EssayEvalContent />
      },
      {
        path: "evalend",
        element: <End />
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;