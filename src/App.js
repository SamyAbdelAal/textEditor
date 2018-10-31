import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Hello World",
      color: "",
      bold: false,
      italic: false,
      underline: false
    };

    this.changeTextColor = this.changeTextColor.bind(this);
    this.changeTextStyle = this.changeTextStyle.bind(this);
  }

  changeTextColor(color) {
    this.setState({ color: color });
  }

  changeTextStyle(style) {
    this.setState({ [style]: !this.state[style] });
  }

  render() {
    let stylings = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = stylings.map(style => {
      return (
        <button
          className={`btn ${this.state[style] && "btn btn-primary"}`}
          style={styles[style]}
          key={style}
          onClick={() => this.changeTextStyle(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.changeTextColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <br />
        {stylingBoxes}
        <br />
        <br />
        <textarea
          style={{
            color: this.state.color,
            fontWeight: this.state.bold ? "bold" : "",
            fontStyle: this.state.italic ? "italic" : "",
            textDecorationLine: this.state.underline ? "underline" : ""
          }}
        />
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
