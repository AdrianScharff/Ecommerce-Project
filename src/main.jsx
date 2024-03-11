import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SearchProvider } from "./contexts/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SearchProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SearchProvider>
);
