import React from 'react';
import {
    PokemonAbilitiesInterface,
    PokemonDataInterface,
    PokemonStatsInterface
} from "../../../../shared/types/pokemonsData.interface";
import styles from './PokemonModalInfo.module.scss'
import TableStats from './TableStats';

interface PokemonModalInfoInterface {
    moreInfo: PokemonDataInterface
    pokemonImg: string
    name: string
}

const PokemonModalInfo = ({moreInfo, pokemonImg, name}: PokemonModalInfoInterface) => {
    return (
        <div className={styles.ModalWrapper}>
            <div className={styles.PokemonImgWrapper}>
                <img src={pokemonImg} alt="image"/>
            </div>
            <h1>{name}</h1>
            <div className={styles.AbilitiesTittle}>Abilities:</div>
            <ul className={styles.AbilityItems}>
                {moreInfo.abilities.map((el: PokemonAbilitiesInterface) => <li
                    key={el.ability.name}>{el.ability.name}</li>)}
            </ul>
            <div className={styles.AbilitiesTittle}>Stats:</div>
            <TableStats stats={moreInfo.stats}/>
        </div>
    );
};

export default PokemonModalInfo;
