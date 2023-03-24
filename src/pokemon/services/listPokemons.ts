import axios from "axios"

export interface PokemonListInterface {
    name: string;
    url: string;
}

interface ListPokemonsInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: PokemonListInterface[];
}

export async function listPokemons(): Promise<ListPokemonsInterface> {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/`

    const response = await axios.get<ListPokemonsInterface>(endpoint);

    return response.data;
}