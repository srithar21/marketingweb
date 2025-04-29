import React, { Component } from "react";
// import styles from "./Button.css"; // Tell webpack that Button.js uses these styles
import "bootstrap/dist/css/bootstrap.css";

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}

export default Button;
