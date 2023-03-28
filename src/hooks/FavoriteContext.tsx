import React from 'react';
import {useState} from 'react'
import { PokemonDetail } from '../interfaces/PokemonDetail';

interface FavoriteContextProps{
    favorites: PokemonDetail[];
    setFavorites: React.Dispatch<React.SetStateAction<PokemonDetail[]>>
}
interface FavoriteProvider {
    children: any;
}

const INITIAL_FAVORITES_VALUE: PokemonDetail[]= [];

export const FavoriteContext = React.createContext<FavoriteContextProps>({
    favorites: INITIAL_FAVORITES_VALUE,
    setFavorites: () => console.warn("SetFavorite is not ready!"),
});

export const FavoriteProvider: React.FC<FavoriteProvider> = ({children}) => {
const [favorites, setFavorites] = useState<PokemonDetail[]>([]);


    return (
        <FavoriteContext.Provider value={{
            favorites,
            setFavorites,
        }}>
            {children}
        </FavoriteContext.Provider>
    );
};
