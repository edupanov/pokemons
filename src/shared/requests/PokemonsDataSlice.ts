import RequestSender from '../services/concrete/requestSender.service';
import {AnyAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    getPokemonByNameRequest,
    PokemonDataInterface,
    PokemonItemInterface,
    PokemonsDataInterface, PokemonTypesInterface
} from "../types/pokemonsData.interface";

type PokemonsDataState = {
    isLoading: boolean
    data: PokemonsDataInterface
    pokemon: PokemonDataInterface
    pokemonTypes: Array<PokemonTypesInterface>
}

const initialState: PokemonsDataState = {
    isLoading: false,
    data: <PokemonsDataInterface>{},
    pokemon: <PokemonDataInterface>{},
    pokemonTypes: <Array<PokemonTypesInterface>>[]
}

export const getPokemonsList = createAsyncThunk<PokemonsDataInterface, string, { rejectValue: any }>(
    'pokemons/list',
    async (url, {rejectWithValue}) => {
        const response = await RequestSender.get(url)
        const result = await response.json()

        return result
            ? result
            : rejectWithValue({message: ''})
    }
)

export const getPokemonByName = createAsyncThunk<PokemonsDataInterface, getPokemonByNameRequest, { rejectValue: any }>(
    'pokemonByName/list',
    async (item, {rejectWithValue}) => {
        const response = await RequestSender.get(item.url)
        const result = await response.json()
        return result
            ? {
                results: result.results.filter((el: PokemonItemInterface) => el.name.includes(item.name)),
                count: result.results.length,
                next: null,
                previous: null
            }
            : rejectWithValue({message: ''})
    }
)

export const getTypePokemons = createAsyncThunk<PokemonTypesInterface[], string, { rejectValue: any }>(
    'TypePokemons/list',
    async (url, {rejectWithValue}) => {
        const response = await RequestSender.get(url)
        const result = await response.json()
        return result
            ? result.results
            : rejectWithValue({message: ''})
    }
)

export const getPokemonsByType = createAsyncThunk<PokemonsDataInterface, string, { rejectValue: any }>(
    'pokemonsByType/list',
    async (url, {rejectWithValue}) => {
        const response = await RequestSender.get(url)
        const result = await response.json()
        return result
            ? {
                results: result.pokemon.map((el: any) => el.pokemon),
                count: result.pokemon.length,
                next: null,
                previous: null
            }
            : rejectWithValue({message: ''})
    }
)

export const getPokemonData = createAsyncThunk<PokemonDataInterface, string, { rejectValue: any }>(
    'pokemon/data',
    async (url, {rejectWithValue}) => {
        const response = await RequestSender.get(url)
        const result = await response.json()
        return result
            ? result
            : rejectWithValue({message: ''})
    }
)

const PokemonsDataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPokemonsList.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getPokemonsList.fulfilled, (state, action) => {
                state.data = action.payload
                state.pokemon = {} as PokemonDataInterface
                state.isLoading = false
            })
            .addCase(getPokemonData.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getPokemonData.fulfilled, (state, action) => {
                state.pokemon = action.payload
                state.isLoading = false
            })
            .addCase(getPokemonByName.pending, (state, action) => {
            })
            .addCase(getPokemonByName.fulfilled, (state, action) => {
                state.data = action.payload
                state.pokemon = {} as PokemonDataInterface
                state.isLoading = false
            })
            .addCase(getTypePokemons.fulfilled, (state, action) => {
                state.pokemonTypes = action.payload
            })
            .addCase(getPokemonsByType.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getPokemonsByType.fulfilled, (state, action) => {
                state.data = action.payload
                state.pokemon = {} as PokemonDataInterface
                state.isLoading = false
            })
    }
})

export const {} = PokemonsDataSlice.actions

export default PokemonsDataSlice.reducer

function isPending(action: AnyAction) {
    return action.type.endsWith('pending')
}

function isError(action: AnyAction) {
    return action.type.endsWith('rejected')
}





