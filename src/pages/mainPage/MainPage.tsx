import React, {FC, useEffect} from 'react'
import styles from './MainPage.module.scss'
import {useActions} from '../../hooks/useActions'
import BackdropSpinner from "../../shared/components/backdrop/BackdropSpinner";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Cards from './chunks/Cards/Cards';
import {Urls} from '../../shared/urls/urls';
import Pagination from './chunks/Pagination/Pagination';
import Filters from "./chunks/Filters/Filters";


const MainPage: FC = () => {

    const {getPokemonsList, getTypePokemons} = useActions()

    const {isLoading} = useTypedSelector(state => state.pokemonsData)

    useEffect(() => {
        getPokemonsList(Urls.GET_POKEMONS_LIST_URL)
        getTypePokemons(Urls.GET_TYPE_POKEMONS_URL)
    }, [])


    return (
        <div className={styles.MainPageWrapper}>
            <Filters/>
            <BackdropSpinner isOpen={isLoading}/>
            <Cards/>
            <Pagination/>
        </div>
    )
}

export default MainPage
