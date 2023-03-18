import { Component } from "react";

class Toggle extends Component {
  state = { isOpen: true, someProp: 123 };
  //   state = { isOpen: faslse };

  show = () => this.setState({ isOpen: true });
  hide = () => this.setState({ isOpen: false });

  toggle = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  };

  render() {
    const { isOpen } = this.state;
    const { children, changeMessage } = this.props;

    console.log(
      "now this is logging whole object, with someProp... ",
      this.state
    );
    // return <div>{isOpen && <div>It is open!</div>}</div>;
    return (
      <div>
        <button onClick={this.show}>Show!</button>
        <button onClick={this.hide}>Hide!</button>
        <button onClick={this.toggle}>{isOpen ? "Hide" : "Show"}</button>
        <button onClick={changeMessage}>Click me!</button>
        {isOpen && children}
      </div>
    );
  }
}

export default Toggle;
