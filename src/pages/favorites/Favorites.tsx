import React, { useContext } from 'react';
import { AppBarButton } from '../../components/AppBar';
import {AiFillHeart} from 'react-icons/ai'
import { FavoriteContext } from '../../hooks/FavoriteContext';
import { PokeDexCard } from '../../components/PokeDexCard';

import { Grid, Container } from '@mui/material';

interface FavoritesProps {
    
}


export const Favorites: React.FC<FavoritesProps> = () => {

    const {favorites} = useContext(FavoriteContext);
    console.log(favorites);

    return (
        <div>
            <AppBarButton icon={AiFillHeart} pokeName="Favorites" returnPage/>
            <Container maxWidth="lg">
                <h1>Favoritos</h1>
                <Grid container spacing={2}>
                { favorites?.map((pokemon, index) => (
                    <Grid item xs={6} lg={3} key={index}> 
                        <PokeDexCard pokemon={pokemon}/>
                    </Grid>
           ))}
                </Grid>
            </Container>
        </div>
    );
};
