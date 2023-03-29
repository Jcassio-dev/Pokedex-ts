import React, {useContext} from 'react';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { FavoriteContext } from '../../hooks/FavoriteContext';
import { PokemonDetail } from '../../interfaces/PokemonDetail';

import * as C from './styles'

interface FavoriteButtonProps {
    pokemon: PokemonDetail;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({pokemon}) => {
    const {favorites, setFavorites}= useContext(FavoriteContext);

    
    const addPokemonToFavorite = () => {
        setFavorites(prevState => [...prevState, pokemon]);
        console.log(favorites);
      };

    const removePokemonFromFavorite = () => {
        setFavorites(prevState => prevState.filter((poke) => poke.name !== pokemon?.name));
    };

    const isFavorite = favorites.some((poke) => poke.name === pokemon?.name);
    return (
        <C.Container>
            {isFavorite ? 
            <button onClick={removePokemonFromFavorite}><AiFillHeart/></button> : 
            <button onClick={addPokemonToFavorite} className="disable"><AiOutlineHeart/></button>
            } 
        </C.Container>
    );
};

