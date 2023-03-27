import axios from "axios"
import { PokemonDetail } from "../interfaces/PokemonDetail";
import { GetPokemonsDetails } from "./getPokemonsDetails";

export interface PokemonListInterface {
    name: string;
    url: string;
}

interface ListPokemonsInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: PokemonDetail[];
}

export async function listPokemons(): Promise<ListPokemonsInterface> {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/`

    const response = await axios.get<ListPokemonsInterface>(endpoint);

    const promiseArr = response.data.results.map(({ name }) => GetPokemonsDetails(name));
    const resultsPromise = await Promise.all(promiseArr)

    return {
        ...response.data,
        results: resultsPromise,
    };
}