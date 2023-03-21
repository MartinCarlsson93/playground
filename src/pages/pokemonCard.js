import { useEffect, useState } from "react";
// function PokemonCard() {}
function PokemonCard({ name, url }) {
  //   const [pokemon, setPokemon] = useState([]);

  //   const fetchData = () => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPokemon(data.results);
  //       });
  //   };

  //   useEffect(fetchData, []);
  console.log(url);

  return (
    <>
      <a href={url}>
        <div className="box">
          <div>
            {/* <div className="imgDiv">
                <img src={img} alt="image" />
              </div> */}
            <h2>{name}</h2>
          </div>
        </div>
      </a>
    </>
  );
}

export default PokemonCard;
