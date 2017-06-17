import React, {Component} from "react";
import ReactDOM from "react-dom";
import logo from "../img/freecodecamp_logo.svg";

export default class Header extends Component {

  render() {
    return (
      <div className="header"><img src={logo}/></div>
    );
  }
}
