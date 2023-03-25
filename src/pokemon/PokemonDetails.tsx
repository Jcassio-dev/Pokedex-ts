import React from 'react';
import { useState, useEffect } from 'react';
import { listPokemons, PokemonListInterface } from '../pokemon/services/listPokemons';
import { GetPokemonsDetails } from '../pokemon/services/getPokemonsDetails';
import { PokemonDetail } from '../pokemon/interfaces/PokemonDetail';

import { AppBarButton } from '../components/AppBar';

import Container from '@mui/material/Container';
import {Box, Grid} from "@mui/material"
 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';


interface PokemonDetails {
    
}

interface PokemonQueryParams {
    name: string;
}


export const PokemonDetails: React.FC<PokemonDetails> = () => {
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);

    const { name } = useParams<PokemonQueryParams>()

    useEffect(() => {
       if(!name) return;

       GetPokemonsDetails(name)
       .then((response) => setSelectedPokemonDetails(response))
       

    }, [name]);

    return (
        <div>
            <AppBarButton name={name}/>
            <Container maxWidth="lg">
            <Box mt={2}> 
            <img src={selectedPokemonDetails?.sprites.front_default} alt={`${name} de frente`}/>

            {JSON.stringify(selectedPokemonDetails, undefined, 2)}
            </Box>
            </Container>
        </div>
    );
};
