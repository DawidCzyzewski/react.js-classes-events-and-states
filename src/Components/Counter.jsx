import { Component } from "react";

class Counter extends Component {
  // Constructed for decrement: It's the best way to connect with function, but it's problematic when I will need for example 15 functions, code in constructor will be not readable

  // constructor() {
  //   super();
  //   this.handleDecrement = this.handleDecrement.bind(this);
  // }

  // handleDecrement(event) {
  //   console.log("Decrement button was clicked", event);
  //   console.log({ props: this.props });
  //   // First resolve of problem is to bind in button
  // }

  // But the best way will be write an arrow function becouse of not have itself context so bind will be not necessary:
  handleDecrement = (event) => {
    console.log("Decrement button was clicked", event);
    console.log({ props: this.props });
  };

  handleIncrement = (event) => {
    console.log("Increment button was clicked", event);
    console.log({ props: this.props });
  };

  age = 5;
  // if my constructor will call only super and don't have more data, I can don't add this, it's default constructor
  //   constructor() {
  //     super();
  //   }

  // static propTypes ={}

  // If I want to get to props, I can do it in render by const props or destructure it
  render() {
    // const props = this.props;
    const { step } = this.props;
    return (
      <div>
        <h4>I'm Counter</h4>
        {/* <div>Step value: {this.props.step}</div> */}
        <div>Step value: {step}</div>
        {/* <button onClick={(event) => console.log(event)}>Click</button> */}
        <button
          type="button"
          onClick={(event) => {
            // Anonime callback, even if in our conspect it is evil, it's the most populac function in work. But it's the slowest wversion, becouse it can often render if changes. Becouse of this, it can change often.
            // console.log("Increment button was clicked", event);
            // console.log({ props: this.props });
            this.handleIncrement(event);
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
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

// Można zrobić to sposobem powyżej i wtedy zmieniać w App lub sposobem poniżej ale w aplikacjach pisanych komercyjnie raczej jest budowa taka jak powyżej

// ReactDOM.render(<Counter step={3} />, document.getElementById("root"));

export default Counter;
