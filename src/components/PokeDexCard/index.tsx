import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PokemonDetail } from '../../interfaces/PokemonDetail';

import * as C from "./styles"

interface PokeDexCard {
    pokemon: PokemonDetail;
}



export const PokeDexCard: React.FC<PokeDexCard> = ({pokemon}) => {
    const navigate = useNavigate()

    function handleClick(pokemon: PokemonDetail){
        navigate(`/pokemon/${pokemon.name}`)
    }

    return (
        <C.Container onClick={() => handleClick(pokemon)}>
            <img src={pokemon.sprites.front_default} alt={`${pokemon.name} De frente`}/>
            <h1>{pokemon.name}</h1>
            {
                pokemon.types.map(({type}) => <h2>{type.name}</h2> )
            }
        </C.Container>
    );
};
