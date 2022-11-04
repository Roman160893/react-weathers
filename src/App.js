import React from "react";

import { Background } from "./components/";
import Header from "./pages/Header";
import Main from "./pages/Main";
import "./style/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Background />
      <div className="weather weather__container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
