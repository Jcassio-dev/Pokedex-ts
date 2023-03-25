import React from 'react';

import { Routes, Route } from "react-router-dom"

import { Pokedex } from '../pokedex/Pokedex';
import { PokemonDetails } from '../pokemon/PokemonDetails';

interface RoutesProps {
    
}

export const AppRoutes: React.FC<RoutesProps> = () => {
    return (
        <Routes>
            <Route path="/" element={<Pokedex/>}/>
            <Route path="/pokemon/:name" element={<PokemonDetails/>}/>
        </Routes>
    );
};

export default Routes;