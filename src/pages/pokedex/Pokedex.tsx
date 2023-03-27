import React from 'react';
import { useState, useEffect } from 'react';



import { listPokemons } from '../../services/listPokemons';

import { AppBarButton } from '../../components/AppBar';
import { PokeDexCard } from '../../components/PokeDexCard';

import Container from '@mui/material/Container';
import {Box, Grid} from "@mui/material"
import { useQuery } from 'react-query'


interface PokedexProps {
    
}




export const Pokedex: React.FC<PokedexProps> = () => {
    const [search, setSearch] = useState<string>('')

    const { data, isLoading, isRefetching } = useQuery(`listPokemons`, listPokemons);
    
    return (
        <div>
            <AppBarButton pokeName="pokedex" />
            {isRefetching && <progress max="100"/>}
            <Container maxWidth="lg">
            {!isLoading ? (
                <Box mt={3}>
                <Grid container spacing={2}>
            {data && data?.results.map((pokemon, index) => (
                <Grid item xs={6} lg={3} key={index}> 
                    <PokeDexCard pokemon={pokemon}/>
                </Grid>
            ))}
        
                    
                </Grid>

            </Box>
            ):
            <div>Carregando</div>
        }
            
            </Container>
        </div>
    );
};
