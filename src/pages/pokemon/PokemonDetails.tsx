import React from 'react';
import { GetPokemonsDetails } from '../../services/getPokemonsDetails';

import { AppBarButton } from '../../components/AppBar';

import Container from '@mui/material/Container';
import {Box, Grid} from "@mui/material"
 
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import {TbPokeball} from 'react-icons/tb'


interface PokemonDetails {
    
}

interface PokemonQueryParams {
    name: string;
}


export const PokemonDetails: React.FC<PokemonDetails> = () => {
    const { name } = useParams<PokemonQueryParams>()


    const { data } = useQuery(`getPokemonsDetails-${name}`, () => GetPokemonsDetails(name))


    return (
        <div>
            <AppBarButton pokeName={name} icon={TbPokeball} returnPage/>
            <Container maxWidth="lg"> 
            <img width="100%" height="600px"src={data?.sprites.front_default} alt={`${name} de frente`}/>          
            <h1>{data?.id} {data?.name}</h1>
            <h2>{data?.types.map(({type}, index) => <p key={index}>{type.name}</p>)}</h2>
            <h2>{data?.species.name}</h2>
            <h2>{data?.height}</h2>
            <h2>{data?.weight}</h2>
            <h2>{data?.abilities.map(({ability}, index) => <p key={index}>{ability.name}</p>)}</h2>
            </Container>
        </div>
    );
};
