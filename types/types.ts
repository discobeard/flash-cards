export interface PokedexBasic {
    index: number;
    name: string;
}
export interface PokedexEnhanced extends PokedexBasic {
    sprite: string;
}

export interface PokemonSprites { 
    sprites: {
        front_default: string;
    }
}

export interface PokemonArtwork { 
    sprites: {
        other: {
            "official-artwork": {
                front_default: string;
        }
    }
}   
};

export interface PokemonDetailResponse { 
    cries:{
        latest: string;
    }
    sprites: {
        other: {
            "official-artwork": {
                front_default: string;
            }
        }
    }
}

export interface PokemonDetails {
    artwork: string;
    cry: string
}

export interface PokedexOverride {
    name: string;
    index: number;
}