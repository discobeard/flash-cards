import axios from "axios";
import { PokemonDetailResponse, PokemonDetails, PokemonSprites } from "../types/types";

const getPokemonSprite = async (pokemonName: string): Promise<string> => {
    const response = await axios.get<PokemonSprites>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response.data.sprites.front_default;
}   

const getPokemonDetail = async (pokemonName: string): Promise<PokemonDetails> => {
    const response = await axios.get<PokemonDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const artwork = response.data.sprites.other["official-artwork"].front_default;
    const cry = response.data.cries.latest;
    return { artwork, cry };
}


const PokemonService = {
    getPokemonSprite,
    getPokemonDetail
}
export default PokemonService