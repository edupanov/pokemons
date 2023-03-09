export interface PokemonsDataInterface {
    count: number
    next: string | null
    previous: string | null
    results: Array<PokemonItemInterface>

}

export interface PokemonItemInterface {
    name: string
    url: string
}

export interface PokemonDataInterface {
    abilities: Array<PokemonAbilitiesInterface>
    base_experience: number
    id: number
    weight: number
    order: number
    sprites: PokemonSpritesInterface
    types: Array<PokemonTypeInterface>
    stats: Array<PokemonStatsInterface>
    name: string
}

export interface PokemonAbilitiesInterface {
    ability: PokemonAbilityInterface
    is_hidden: boolean
    slot: number
}

export interface PokemonAbilityInterface {
    name: string
    url: string
}

export interface PokemonAbilityInterface {
    name: string
    url: string
}

export interface PokemonSpritesInterface {
    back_default: string
    back_female: string | null
    back_shiny: string
    back_shiny_female: string | null
    front_default: string
    front_female: string | null
    front_shiny: string
    front_shiny_female: string | null
}

export interface PokemonTypeInterface {
    slot: number
    type: {
        name: string
        url: string
    }
}

export interface PokemonStatsInterface {
    base_stat: number
    effort: number
    stat: {
        name: string
        url: string
    }
}

export interface PokemonTypesInterface {
    name: string
    url: string
}

export interface getPokemonByNameRequest {
    url: string
    name: string
}




