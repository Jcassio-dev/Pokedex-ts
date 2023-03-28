import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { PokemonDetail } from '../../interfaces/PokemonDetail';
import { FavoriteContext } from '../../hooks/FavoriteContext';

import * as C from "./styles";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface PokeDexCard {
    pokemon: PokemonDetail;
}



export const PokeDexCard: React.FC<PokeDexCard> = ({pokemon}) => {
    const navigate = useNavigate();
    const {favorites, setFavorites}= useContext(FavoriteContext);

    function handleClick(pokemon: PokemonDetail){
        navigate(`/pokemon/${pokemon.name}`);
    };

    const addPokemonToFavorite = () => {
        setFavorites(prevState => [...prevState, pokemon]);
        console.log(favorites);
      };

    const removePokemonFromFavorite = () => {
        setFavorites(prevState => prevState.filter((poke) => poke.name !== pokemon.name));
    };

    const isFavorite = favorites.some((poke) => poke.name === pokemon.name);
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

            {isFavorite ? 
            <button onClick={removePokemonFromFavorite}><AiFillHeart/></button> : 
            <button onClick={addPokemonToFavorite} className="disable"><AiOutlineHeart/></button>
            }
            
        </C.Container>
    );
};
