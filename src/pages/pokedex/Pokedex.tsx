import React from 'react';
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { listPokemons, PokemonListInterface } from '../../services/listPokemons';
import { GetPokemonsDetails } from '../../services/getPokemonsDetails';
import { PokemonDetail } from '../../interfaces/PokemonDetail';

import { AppBarButton } from '../../components/AppBar';
import { PokeDexCard } from '../../components/PokeDexCard';

import Container from '@mui/material/Container';
import {Box, Grid} from "@mui/material"





interface PokedexProps {
    
}


export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);
    
    const navigate = useNavigate()

    function handleClick(pokemon: PokemonListInterface){
        navigate(`/pokemon/${pokemon.name}`)
    }

    useEffect(()=> {
        listPokemons()
        .then(response => setPokemons(response.results))

    }, [])

    useEffect(() => {
       if(!selectedPokemon) return;

       GetPokemonsDetails(selectedPokemon.name)
       .then((response) => setSelectedPokemonDetails(response))
       

    }, [selectedPokemon]);

    return (
        <div>
            <AppBarButton name="pokedex"/>
            <Container maxWidth="lg">
            <Box mt={3}>
                <Grid container spacing={2}>
            {pokemons && pokemons.map((pokemon, index) => (
                <Grid item xs={6} lg={3}> 
                    <PokeDexCard/>
                </Grid>
            ))}
        
                    
                </Grid>
            pokemons: 

            {selectedPokemon ? <h2>Pokemon Selecionado: {selectedPokemon.name}</h2> : ''}
            {JSON.stringify(selectedPokemonDetails, undefined, 2)}

            </Box>
            </Container>
        </div>
    );
};
