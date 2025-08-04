import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./pages/index.js";
import { ThemeConfig } from "flowbite-react";
import AppRoutes from "./routes/appRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeConfig dark={false} />
    <AppRoutes />
  </StrictMode>
);
