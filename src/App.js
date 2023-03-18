import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Counter from "./Components/Counter";
import Toggle from "./Components/Toggle";

class MyComponent extends Component {
  name = "Dawid";
  age = 30;

  // here I will write my default props and types what I want
  static defaultProps = {
    email: "DefaultProps: No email added!",
  };
  static propTypes = {};

  constructor() {
    super();
    this.age = 31;
  }
  shouldReturnAlwaysTrue() {
    return true;
  }

  // In enter I can add files or check for example props
  render() {
    // console.log("Render of class, this.props: ", this.props);
    // console.log("Render of class, this: ", this);
    return (
      <div>
        This is my first Class Component! Bravo, {this.name} with age {this.age}
      </div>
    );
  }
}

function App() {
  // const currentState = { name: "Tom", age: 15 };
  // const updateSomeState = { firstName: "Bob", age: 30 };
  // const finalState = {
  //   ...currentState,
  //   ...updateSomeState,
  // };

  return (
    <>
      <MyComponent element="Added in function App" />
      <Counter step={5} />
      <Counter step={3} />
      <Counter step={3} initialValue={10} />
      {/* <Toggle />
      <Toggle>
        <div>It is open in App!</div>
      </Toggle> */}
      {/* <Toggle>test</Toggle> */}
    </>
  );
}

export default App;
