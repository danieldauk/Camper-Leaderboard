import React, {Component} from "react";
import ReactDOM from "react-dom";

import Header from "./header";
import Footer from "./footer";
import Table from "../containers/table";

export default class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Table/>
        <Footer/>
      </div>
    );
  }

};
