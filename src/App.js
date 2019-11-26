import React, { Component } from "react";
import "./App.css";
import Countdown from "./Components/Countdown";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App-header">
        <h1>How long until Christmas Eve?</h1>
        <Countdown
          timeTillDate="12 24 2019, 06:00 am"
          timeFormat="MM DD YYYY, h:mm a"
        />
      </div>
    );
  }
}

export default App;
