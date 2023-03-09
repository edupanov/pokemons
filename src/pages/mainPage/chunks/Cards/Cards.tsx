import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {PokemonItemInterface} from "../../../../shared/types/pokemonsData.interface";
import Card from "./Card";
import styles from './Cards.module.scss'

const Cards = () => {

    const {results} = useTypedSelector(state => state.pokemonsData.data)

    const [pokemonsData, setPokemonsData] = useState<Array<PokemonItemInterface>>([])

    useEffect(() => {
        if (results) {
            setPokemonsData(results)
        }
    }, [results])

    return (
        <div className={styles.CardsWrapper}>
            {pokemonsData.map((element: PokemonItemInterface) =>
                <Card
                    name={element.name}
                    url={element.url}
                    key={element.name}
                />
            )}
        </div>
    );
};

export default Cards;
