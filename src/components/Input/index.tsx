import React from 'react';
import * as C from './styles'


interface InputProps {
icon?: any ;
placeholder?: string;   
}

export const Input: React.FC<InputProps> = ({icon: Icon, placeholder}) => {
    return (
        <C.Container>
            {Icon && <Icon size={20}/>}
            <input placeholder={placeholder}/>
        </C.Container>
    );
};

