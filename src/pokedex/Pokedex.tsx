import React from 'react';
import { useState, useEffect } from 'react';
import  axios  from 'axios'

interface PokedexProps {
    
}
interface PokemonListInterface {
    name: string;
    url: string;
}

function getDetailsFromPokemon(pokemon: PokemonListInterface){

}

export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<any | undefined>(undefined);
    

    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => setPokemons(response.data.results))

    }, [])

    useEffect(() => {
       if(!selectedPokemon) return;

       axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`)
       .then((response) => setSelectedPokemonDetails(response.data))
       

    }, [selectedPokemon]);

    return (
        <div>
            <h1>Pokedex</h1>

            pokemons: 
            {pokemons && pokemons.map((pokemon, index) => (
                <button key={index} onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>
            ))}

            {selectedPokemon ? <h2>Pokemon Selecionado: {selectedPokemon.name}</h2> : ''}
            {JSON.stringify(selectedPokemonDetails, undefined, 2)}
        </div>
    );
};
