import { Component } from "react";
import Toggle from "./Toggle";

class Counter extends Component {
  // Constructed for decrement: It's the best way to connect with function, but it's problematic when I will need for example 15 functions, code in constructor will be not readable

  // constructor() {
  //   super();
  //   this.handleDecrement = this.handleDecrement.bind(this);
  // }

  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  // I have to remember to put inside props in constructor and super
  // constructor(props) {
  //   super(props);
  //   // this.state = { counterValue: 0 };
  //   // this.state = { counterValue: this.props.initialValue ?? 0 };
  //   // if static defaultProps:
  //   this.state = { counterValue: this.props.initialValue };
  // }

  // I can also write just state, without constructor, super and this:
  state = { counterValue: this.props.initialValue };

  // handleDecrement(event) {
  //   console.log("Decrement button was clicked", event);
  //   console.log({ props: this.props });
  //   // First resolve of problem is to bind in button
  // }

  // But the best way will be write an arrow function becouse of not have itself context so bind will be not necessary:
  handleDecrement = () => {
    // handleDecrement = (event) => {
    // console.log("Decrement button was clicked", event);
    // console.log({ props: this.props });

    this.setState((state, props) => {
      return {
        counterValue: state.counterValue - props.step,
      };
    });
  };

  handleIncrement = () => {
    // handleIncrement = (event) => {
    // console.log("Increment button was clicked", event);
    // console.log({ props: this.props });
    // for (let i = 0; i < 5; i++) {
    //   // console.log(this.state.counterValue);
    //   // This will log the same value 5 times, but not changing value 5 times, just once
    //   // this.setState({ counterValue: this.state.counterValue + 1 });
    //   // this.setState((state, props)=> {
    //   this.setState((previousState) => {
    //     console.log(previousState.counterValue);
    //     return {
    //       counterValue: previousState.counterValue + 1,
    //     };
    //   });
    // }

    this.setState((state, props) => {
      return {
        counterValue: state.counterValue + props.step,
      };
    });
  };

  age = 5;
  // if my constructor will call only super and don't have more data, I can don't add this, it's default constructor
  //   constructor() {
  //     super();
  //   }

  // static propTypes ={}

  handleChange = (isIncrement, step) => {
    this.setState((state) => {
      return {
        counterValue: isIncrement
          ? state.counterValue + step
          : state.counterValue - step,
      };
    });
  };

  someFunc = () => {
    console.log("function from counter!");
    this.setState({ message: new Date().toLocaleDateString() });
  };

  // If I want to get to props, I can do it in render by const props or destructure it
  render() {
    // const props = this.props;
    const { step } = this.props;
    const { counterValue, message } = this.state;

    return (
      <div>
        <h4>I'm Counter</h4>
        {/* <div>Step value: {this.props.step}</div> */}
        {/* <div>Step value: {step}</div> */}
        {/* <div>Counter value: {this.state.counterValue}</div> */}
        <div>Counter value: {counterValue}</div>

        {/* <button onClick={(event) => console.log(event)}>Click</button> */}
        {/* <button
          type="button"
          onClick={(event) => {
            // Anonime callback, even if in our conspect it is evil, it's the most populac function in work. But it's the slowest wversion, becouse it can often render if changes. Becouse of this, it can change often.
            // console.log("Increment button was clicked", event);
            // console.log({ props: this.props });
            this.handleIncrement(event);
          }}
        >
          Increment by {step}
        </button> */}
        {/* <button
          type="button"
          onClick={(event) => {
            this.handleChange("UP");
          }}
        >
          Increment by {step}
        </button> */}
        <button
          type="button"
          onClick={() => {
            this.handleChange(true, step);
          }}
        >
          Increment by {step}
        </button>

        {/* Button without bind: */}
        {/* <button type="button" onClick={this.handleDecrement}>
          {" "}
          Decrement by {step}
        </button> */}
        {/* This resolve is also not recommended, becouse of rendering every change: */}
        {/* <button type="button" onClick={this.handleDecrement.bind(this)}>
          Decrement by {step}
        </button> */}
        {/* This will work with constructed for this constructor up here and for arrow function*/}
        {/* <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button> */}
        <button
          type="button"
          onClick={() => {
            this.handleChange(false, step);
          }}
        >
          Decrement by {step}
        </button>
        <p>{message}</p>
        <Toggle changeMessage={this.someFunc}>test</Toggle>
      </div>
    );
  }
}

// Można zrobić to sposobem powyżej i wtedy zmieniać w App lub sposobem poniżej ale w aplikacjach pisanych komercyjnie raczej jest budowa taka jak powyżej

// ReactDOM.render(<Counter step={3} />, document.getElementById("root"));

export default Counter;
