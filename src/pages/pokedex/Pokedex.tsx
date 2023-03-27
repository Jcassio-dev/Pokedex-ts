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
    //const [pokemons, setPokemons] = useState<Pokemo[]>([]);

    const { data } = useQuery(`listPokemons`, listPokemons);
    
    return (
        <div>
            <AppBarButton name="pokedex"/>
            <Container maxWidth="lg">
            <Box mt={3}>
                <Grid container spacing={2}>
            {data && data?.results.map((pokemon, index) => (
                <Grid item xs={6} lg={3} key={index}> 
                    <PokeDexCard pokemon={pokemon}/>
                </Grid>
            ))}
        
                    
                </Grid>

            </Box>
            </Container>
        </div>
    );
};
