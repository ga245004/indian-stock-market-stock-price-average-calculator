import React from "react";

import Header from "./components/Header/Header";
import StockHeader from "./components/StockEntry/StockEntry";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <StockHeader />
    </div>
  );
}
