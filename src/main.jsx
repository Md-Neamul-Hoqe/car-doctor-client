import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  </React.StrictMode>
);
