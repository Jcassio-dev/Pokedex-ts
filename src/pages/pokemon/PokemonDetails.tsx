import React, { useContext } from 'react';

import { AppBarButton } from '../../components/AppBar';
import { FavoriteButton } from '../../components/FavoriteButton';

import { FavoriteContext } from '../../hooks/FavoriteContext';

import { GetPokemonsDetails } from '../../services/getPokemonsDetails';

import Container from '@mui/material/Container';
 
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AiOutlineHeart } from 'react-icons/ai';

import * as C from './styles'

interface PokemonDetails {
    
}

interface PokemonQueryParams {
    name: string;
}


export const PokemonDetails: React.FC<PokemonDetails> = () => {
    const { name } = useParams<PokemonQueryParams>()
    
    const { favorites } = useContext(FavoriteContext)

    const { data } = useQuery(`getPokemonsDetails-${name}`, () => GetPokemonsDetails(name))

    console.log(data)
    return (
        <div>
            <AppBarButton pokeName={name} icon={AiOutlineHeart} NavigatePage="/favorites" FavoritesNumber={favorites.length} returnPage/>
            <Container maxWidth="lg"> 
            <C.Header>
            <h1>{data?.name[0].toUpperCase() + data?.name.substring(1)}</h1>
            <FavoriteButton pokemon={data}/>
            </C.Header>
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
