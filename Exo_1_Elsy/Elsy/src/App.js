import React from "react";
import "./App.css";
import "./bootstrap/dist/css/bootstrap.min.css";
import Box from "./components/box";
import "./styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;
const minwater = 1.5;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      water: 1.5,
      heart: 100,
      temperature: -10,
      steps: 3000,
    };
  }

  onHeartChange = (e) => {
    this.setState((prevState) => {

      return this.calculateWater({
        ...prevState,
        heart: e.target.value,
      });
    });
  };

  onTempChange = (e) => {
    this.setState((prevState) => {

      return this.calculateWater({
        ...prevState,
        temperature: e.target.value,
      });
    });
  };

  onStepsChange = (e) => {
    this.setState((prevState) => {

      return this.calculateWater({
        ...prevState,
        steps: e.target.value,
      });
    });
  };

  calculateWater = (newState) => {

    const tempIncrement = 0.02 * newState.temperature;
    const heartIncrement = 0.0008 * newState.heart;
    const stepIncrement = 0.00002 * newState.steps;

    return {
      ...newState,
      water: minwater + tempIncrement + heartIncrement + stepIncrement,
    };
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box
            icon="local_drink"
            color="#3A85FF"
            value={this.state.water}
            unit="L"
          />
          <Box
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            onChange={this.onStepsChange}
            min={stepsMin}
            max={stepsMax}
          />
          <Box
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            onChange={this.onHeartChange}
            min={heartMin}
            max={heartMax}
          />
          < Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            onChange={this.onTempChange}
            min={tempMin}
            max={tempMax}
          />
        </div>
      </div>
    );
  }
}

export default App;