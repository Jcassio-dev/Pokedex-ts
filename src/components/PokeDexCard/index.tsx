import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PokemonDetail } from '../../interfaces/PokemonDetail';

import { FavoriteButton } from '../FavoriteButton';

import * as C from "./styles";


interface PokeDexCard {
    pokemon: PokemonDetail;
}



export const PokeDexCard: React.FC<PokeDexCard> = ({pokemon}) => {
    const navigate = useNavigate();

    function handleClick(pokemon: PokemonDetail){
        navigate(`/pokemon/${pokemon.name}`);
    };

    return (
        <C.Container>
            <div onClick={() => handleClick(pokemon)} className="PokeInfo">
            <div>
            <h1>#{pokemon.id} {pokemon.name}</h1>
            {
                pokemon.types.map(({type}, index) => <h2 key={index}>{type.name}</h2> )
            }
            </div>
            <img src={pokemon.sprites.front_default} alt={`${pokemon.name} De frente`}/>
            </div>

            <FavoriteButton pokemon={pokemon}/>
           
            
        </C.Container>
    );
};
