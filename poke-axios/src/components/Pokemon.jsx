import React, {useState} from 'react';
import axios from 'axios';
import styles from './Pokemon.module.css'

const Pokemon = (props) => {
   
    const [pokemon, setPokemon] = useState()

    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => setPokemon(res.data.results))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <button className={styles.btn} type="button" onClick={getPokemon}>Fetch Pokemon</button>
            {pokemon ? pokemon.map((item, index)=>{
                return(<div className={styles.name} key={index}>{item.name}</div>)
            }):null}
        </div>
    )
}

export default Pokemon;