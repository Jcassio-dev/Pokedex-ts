import React from 'react';

import { Routes, Route } from "react-router-dom"

import { Favorites } from '../pages/favorites/Favorites';
import { Pokedex } from '../pages/pokedex/Pokedex';
import { PokemonDetails } from '../pages/pokemon/PokemonDetails';

interface RoutesProps {
    
}

export const AppRoutes: React.FC<RoutesProps> = () => {
    return (
        <Routes>
            <Route path="/" element={<Pokedex/>}/>
            <Route path="/pokemon/:name" element={<PokemonDetails/>}/>
            <Route path="/favorites/" element={<Favorites/>}/>
        </Routes>
    );
};

export default Routes;