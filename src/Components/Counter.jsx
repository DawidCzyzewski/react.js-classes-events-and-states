import { Component } from "react";

class Counter extends Component {
  // if my constructor will call only super and don't have more data, I can don't add this, it's default constructor
  //   constructor() {
  //     super();
  //   }

  render() {
    return <div>I'm Counter</div>;
  }
}

export default Counter;
