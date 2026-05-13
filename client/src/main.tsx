import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";

import App from "@/app/App";

import "@/app/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Theme>
  </StrictMode>,
);
