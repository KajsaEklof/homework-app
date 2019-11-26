import React, { Component } from "react";
import moment from 'moment';
import './App.css';
import Countdown from "./Countdown";


class App extends Component {
  state = {  }
  render() { 
    return (
      <Countdown timeTillDate="12 24 2019, 06:00 am" timeFormat="MM DD YYYY, h:mm a"/>
    );
  }
}
 
export default App;

