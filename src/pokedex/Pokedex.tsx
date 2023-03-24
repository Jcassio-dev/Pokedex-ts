import React from 'react';
import { useState, useEffect } from 'react';
import { listPokemons, PokemonListInterface } from '../pokemon/services/listPokemons';
import { GetPokemonsDetails } from '../pokemon/services/getPokemonsDetails';
import { PokemonDetail } from '../pokemon/interfaces/PokemonDetail';

import { AppBarButton } from '../components/AppBar';
import { BasicCard } from '../components/Card';

import Container from '@mui/material/Container';
import {Box, Grid} from "@mui/material"
 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface PokedexProps {
    
}


export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);
    

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
            <AppBarButton/>
            <Container maxWidth="lg">
            <Box mt={2}>
                <Grid container spacing={2}>
            {pokemons && pokemons.map((pokemon, index) => (
                <div key={index}>
                <Grid item xs={6} lg={3}> 
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                             {pokemon.name}
                        </Typography>
        
                    </CardContent>
                    <CardActions>
                        <Button onClick={()=> setSelectedPokemon(pokemon)}size="small">Abrir</Button>
                    </CardActions>
    </Card>
                </Grid>
                </div>
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
