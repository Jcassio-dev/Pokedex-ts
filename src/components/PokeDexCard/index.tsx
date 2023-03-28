import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { PokemonDetail } from '../../interfaces/PokemonDetail';
import { FavoriteContext } from '../../hooks/FavoriteContext';

import * as C from "./styles"

interface PokeDexCard {
    pokemon: PokemonDetail;
}



export const PokeDexCard: React.FC<PokeDexCard> = ({pokemon}) => {
    const navigate = useNavigate()
    const {favorites, setFavorites}= useContext(FavoriteContext)

    function handleClick(pokemon: PokemonDetail){
        navigate(`/pokemon/${pokemon.name}`)
    }

    const  addPokemonToFavorite = (pokemon: PokemonDetail) => {
        setFavorites({...favorites, pokemon})
      }
      

    return (
        <C.Container onClick={() => handleClick(pokemon)}>
            <img src={pokemon.sprites.front_default} alt={`${pokemon.name} De frente`}/>
            <h1>#{pokemon.id} {pokemon.name}</h1>
            {
                pokemon.types.map(({type}, index) => <h2 key={index}>{type.name}</h2> )
            }
        </C.Container>
    );
};
