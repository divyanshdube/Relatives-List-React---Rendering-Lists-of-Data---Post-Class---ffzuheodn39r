import React, { Component, useState } from "react";
import "../styles/App.css";

const relativeList = ["abc", "abc1", "abc3", "abc4"];

class App extends Component {
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key="relativeList">
          {relativeList.map((item, i) => {
            return <li key={`relativeListItem${i + 1}`}>{item}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default App;
