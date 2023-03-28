import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { AiOutlineHeart } from 'react-icons/ai'
import { useQuery } from 'react-query'

import { FavoriteContext } from "../../hooks/FavoriteContext"

import { listPokemons } from '../../services/listPokemons';

import { AppBarButton } from '../../components/AppBar';
import { PokeDexCard } from '../../components/PokeDexCard';

import Container from '@mui/material/Container';
import {Box, Grid} from "@mui/material"


interface PokedexProps {
    
}




export const Pokedex: React.FC<PokedexProps> = () => {
    const [search, setSearch] = useState<string>('')

    const { data, isLoading, isRefetching } = useQuery(`listPokemons`, listPokemons);

    const { favorites, setFavorites } = useContext(FavoriteContext);
    
    return (
        <div>
            <AppBarButton pokeName="PokeDex" icon={AiOutlineHeart} NavigatePage="/favorites"/>
            {isRefetching && <progress max="100"/>}
            <Container maxWidth="lg">
            {!isLoading ? (
                <Grid container spacing={2}>
            {data && data?.results.map((pokemon, index) => (
                <Grid item xs={6} lg={3} key={index}> 
                    <PokeDexCard pokemon={pokemon}/>
                </Grid>
            ))}
                </Grid>
            ):
            <div>Carregando</div>
        }
            
            </Container>
        </div>
    );
};
