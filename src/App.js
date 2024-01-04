import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

const App = () => {

  // // Virtual DOM
  // console.log(<MainBody />);
  
  return (
    <div className="App">
      <Header />
      <MainBody />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
