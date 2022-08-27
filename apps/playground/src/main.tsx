import React from "react";
import ReactDOM from "react-dom/client";

const App = () => <h1>hello world</h1>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
