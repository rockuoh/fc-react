import React, { Component } from "react";

export default class ClassComponent2 extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = { date: new Date() };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }

  handleClick() {
    alert(this.state.date);
  }
  handleClickArrow = () => {
    alert(this.state.date);
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    // console.log("render");

    return (
      <div>
        <button onClick={this.handleClick}>alert if click this </button>
        <button onClick={this.handleClickArrow}>
          arrow alert if click this
        </button>

        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
