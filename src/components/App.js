import React, { Component, useState } from "react";
import "../styles/App.css";

let relativeList = ["Ram", "Prakash", "Suresh", "Pritam"];

class App extends Component {
  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          {relativeList.map((item, index) => {
           return <li key={relativeListItems`${index + 1}`}>{item}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default App;
