import React, { Component } from "react";
import "./Main.scss";
import Background from './Background/Background';

class Main extends Component {
  

    render() {
    
      return (
        <main className="Main">
            <Background/>
        </main>
      );
    }
  }

export default Main