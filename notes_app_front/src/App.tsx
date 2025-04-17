import React from "react";
import Routes from "./router/Routes";
import "./app.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes />
    </div>
  );
};

export default App;
