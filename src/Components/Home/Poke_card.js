import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Poke_card(props) {
  const [info, setInfo] = useState({});

  const get_infoPoke_from_API = async () => {
    try {
      await axios({
        method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${props.id + 1}`,
      }).then((res) => {
        let infoImage = res.data.sprites.other;

        setInfo(infoImage["official-artwork"].front_default);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    get_infoPoke_from_API();
  }, []);

  return (
    <div className="col-3 my-5">
      <div className="card">
        <img className="card-img-top" src={info} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}
