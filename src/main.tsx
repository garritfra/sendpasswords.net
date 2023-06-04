import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./i18n";

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: window.navigator.language,
  debug: true,

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
