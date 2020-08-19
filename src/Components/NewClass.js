import React, { Component } from "react";
import axios from "axios";

class NewClass extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [{ results: [] }],
    };
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      this.setState({ pokemon: [res.data] });
    });
  }

  render() {
    return (
      <div>
        {this.state.pokemon[0].results.map((element, index) => {
          return (
            <div style={{ color: "white" }} key={index}>
              {element.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default NewClass;
