import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { NuqsAdapter } from "nuqs/adapters/react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <NuqsAdapter>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NuqsAdapter>
);
