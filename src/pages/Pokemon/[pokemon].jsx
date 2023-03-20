import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Pokemon () {
    const [pokemonData, setPokemonData] = useState({});
    const router = useRouter();
    const { pokemons } = router.query;

    useEffect (fetchData, [pokemons])

    return(
        <>
        <div>
            <h1>POKEMON</h1>
        </div>
        </>
    )
}

export default Pokemon;