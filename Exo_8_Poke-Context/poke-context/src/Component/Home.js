import { useState, useEffect } from "react";
import hyperBall from "../Image/HyperBall.png";
import { useContext } from "react";
import { UserContext } from "../App.js";

// CSS
import "./Home.css";

const Home = () => {


    const user = useContext(UserContext);
    const [pokemon, setPokemon] = useState(null);
    const [ID, setID] = useState(1);
    const [picture, setPicture] = useState(1);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
            .then((res) => res.json())
            .then((res) => {

                // console.log(res);
                setPokemon(res);
                setIsLoading(false);
            })
    }, [ID])


    function randomNumber() {

        setPicture(Math.floor(Math.random() * 10) + 1)
        setID(Math.floor(Math.random() * 649) + 1)
    }

    if (isLoading) {
        return (
            <div className="loader">
                <img className="loader-image" src={hyperBall} alt="Hyper ball " />
            </div>
        )
    }
    if (user.isLogged === false) {
        return (
            <div className="loader">
                <img className="loader-image" src={hyperBall} alt="Hyper ball " />
            </div>
        )
    }
    else {
        return (
            <div className="home-div">
                <div className="content-div">
                    <button className="poke-button" onClick={randomNumber} >Get a Pokemon</button>
                    <div>
                        <p>Pokemon's name: {pokemon.forms[0].name}</p>
                        <p>Pokemon's height: {pokemon.height / 10} m</p>
                        <p>Pokemon's weight: {pokemon.weight / 10} kg</p>
                        <p>Pokemon's type: {(pokemon.types.length === 2)
                            ? `${pokemon.types[0].type.name} and  ${pokemon.types[1].type.name}`
                            : `${pokemon.types[0].type.name}`}</p>
                        <div className="image-div">
                            {(picture === 10)
                                ? <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${ID}.gif`} alt={`${pokemon.forms[0].name}`} />
                                : <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${ID}.gif`} alt={`${pokemon.forms[0].name}`} />
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
}

export default Home;
