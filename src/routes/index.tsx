import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

interface RoutesProps {
    
}


export const Routes: React.FC<RoutesProps> = () => {

    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    );
};
