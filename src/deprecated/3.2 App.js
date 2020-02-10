import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    console.log("add");
    // 좋은 예
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    console.log("minus");
    // 안 좋은 예
    this.setState({count: this.state.count - 1});
  };

  componentDidMount() {
    console.log("I'm rendering!");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
