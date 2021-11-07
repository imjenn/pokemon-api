import React, {useState} from 'react';
import styles from './Pokemon.module.css'

const Pokemon = (props) => {
    const [state, setState] = useState("");

    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setState({
                    pokemon: response.results
                })
            })
        console.log('test')
    };

    return (
        <div>
            <button className={styles.btn} type="button" onClick={getPokemon}>Fetch Pokemon</button>
            {state.pokemon ? state.pokemon.map((item, index)=>{
                return(<div className={styles.name} key={index}>{item.name}</div>)
            }):null}
        </div>
    )
}

export default Pokemon;