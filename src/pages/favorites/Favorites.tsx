import React from 'react';
import { AppBarButton } from '../../components/AppBar';
import {AiFillHeart} from 'react-icons/ai'

interface FavoritesProps {
    
}


export const Favorites: React.FC<FavoritesProps> = () => {
    return (
        <div>
            <AppBarButton icon={AiFillHeart} pokeName="Favorites" returnPage/>
           <h1>vcsdf</h1> 
        </div>
    );
};
