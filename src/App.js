import React, { Component } from "react";

import Header from "./components/Header";
//this is a functional component jsx instead of the class components
function App() {
  // const name = "Brad";
  return (
    <div className="container">
      <Header />
    </div>
  );
}

// this is a class component

// class App extends Component {
//   state = {};
//   render() {
//     return <h1>This is a class component</h1>;
//   }
// }

export default App;
