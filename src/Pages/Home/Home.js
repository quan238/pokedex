import axios from "axios";
import React, { useState, useEffect } from "react";
import Poke_card from "../../Components/Home/Poke_card";
import Poke_info from "../Poke_info/Poke_info";

export default function Home() {
  let initialPoke = [];

  useEffect(() => {
    get_Data_From_PokeAPI();
  }, []);

  const get_Data_From_PokeAPI = async () => {
    try {
      await axios({
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/?offset=151&limit=151",
      }).then((res) => {
        setpoke(res.data.results);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [poke, setpoke] = useState(initialPoke);

  console.log(poke);
  return (
    <div className="container">
      <div className="main-content mt-5">
        {/* header */}
        <h1 className="text-center">Pokedex</h1>

        {/* Main-content */}
        <div className="row justify-content-between">
          {/* {poke &&
              poke.map((pokeCard, index) => {
                return <Poke_card></Poke_card>;
              })} */}
          {poke.map((pokeCard, index) => {
            return <Poke_card id={index} key={index}></Poke_card>;
          })}
        </div>
      </div>
    </div>
  );
}
