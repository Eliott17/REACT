import { useState, useEffect } from "react";

// CSS
import "./Home.css";

const Home = () => {



    const [pokemon, setPokemon] = useState(null);
    const [ID, setID] = useState(1);
    const [picture, setPicture] = useState(1);


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
        setPicture(Math.floor(Math.random() * 10) + 1)
        setID(Math.floor(Math.random() * 898) + 1)
    }
    console.log(`${ID} is id`)

    // function isShiny() {
    //     return setPicture(Math.floor(Math.random() * 10) + 1)
    // }
    console.log(picture)

    return (
        <div className="home-div">
            <div className="content-div">
                <button onClick={randomNumber} >Get a Pokemon</button>
                <div>
                    <p>Pokemon's name: {pokemon.forms[0].name}</p>
                    <p>Pokemon's height: {pokemon.height}</p>
                    <p>Pokemon's weight: {pokemon.weight}</p>
                    <p>Pokemon's type: {(pokemon.types.length === 2)
                        ? `${pokemon.types[0].type.name} and  ${pokemon.types[1].type.name}`
                        : `${pokemon.types[0].type.name}`}</p>
                    <div className="image-div">
                        {(picture === 10)
                            ? <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${ID}.png`} alt={`${pokemon.forms[0].name}`} />
                            : <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ID}.png`} alt={`${pokemon.forms[0].name}`} />
                        }
                    </div>
                    {(picture === 10)
                        ? <p>Damn he's shiny, don't forget to catch it !</p>
                        : null
                    }
                </div>
            </div>
        </div >
    )
}

export default Home;
