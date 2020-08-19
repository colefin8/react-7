import React, { useState, useEffect } from "react";
import axios from "axios";

function NewHooks(props) {
  //   const [state, setState] = useState({
  //       pokemon: [{ results: [] }],
  //       trainer: "Cole"
  //      });

  const [pokemon, setPokemon] = useState([{ results: [] }]);
  const [trainer, setTrainer] = useState("Cole");
  const [toggle, setToggle] = useState(true);

  //#useEffect takes 2 args: function to run and a depedency array
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemon([res.data]);
    });
  }, []);

  useEffect(() => {
    console.log("you toggled!");
  }, [toggle]);

  return (
    <div>
      {pokemon[0].results.map((element, index) => {
        return (
          <div style={{ color: "white" }} key={index}>
            {element.name}
          </div>
        );
      })}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle!
      </button>
    </div>
  );
}

export default NewHooks;
