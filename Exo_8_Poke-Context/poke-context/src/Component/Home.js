import { useState, useEffect } from "react";

const Home = () => {



    const [pokemon, setPokemon] = useState(null);
    const [ID, setID] = useState(1);


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
            .then((res) => res.json())
            .then((res) => {

                // console.log(res);
                setPokemon(res);
            })
    }, [ID])
    // console.log(pokemon)

    if (!pokemon) {
        return (null)
    }

    function randomNumber() {
        return setID(Math.floor(Math.random() * 100) + 1)
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={randomNumber} >Get a Pokemon</button>
            <p>Pokemon's name: {pokemon.forms[0].name}</p>
            <p>Pokemon's height: {pokemon.height}</p>
            <p>Pokemon's weight: {pokemon.weight}</p>
            <p>Pokemon's type: {(pokemon.types.length === 2)
                ? `${pokemon.types[0].type.name} and  ${pokemon.types[1].type.name}`
                : `${pokemon.types[0].type.name}`}</p>
        </div>
    )
}

export default Home;
