import {configureStore, EnhancedStore} from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import PokemonsDataSlice from '../shared/requests/PokemonsDataSlice';

const saveToLocalStorage = (state: any) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('state');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};
const preloadedState = loadFromLocalStorage();

const store = configureStore({
    reducer: {
        pokemonsData: PokemonsDataSlice
    },
    preloadedState
})

export default store

store.subscribe(() => {
    saveToLocalStorage({});
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
