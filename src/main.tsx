import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ErrorBoundary from "@/utils/ErrorBoundary.tsx";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </RecoilRoot>
  </StrictMode>,
);
