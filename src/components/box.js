import React, { Component } from "react";
import "../App.css";

class Box extends Component {
  render() {
    var img = {
      width: 200,
      height: 250
    };

    return (
      <div>
        <div>
          <img style={img} src={this.props.source} alt="logo" />
        </div>
        <h4>{this.props.name}</h4>
        <p>{this.props.des}</p>
      </div>
    );
  }
}

export default Box;
