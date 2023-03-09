import React, {useEffect, useState} from 'react';
import RequestSender from '../../../../shared/services/concrete/requestSender.service';
import {PokemonDataInterface, PokemonTypeInterface} from "../../../../shared/types/pokemonsData.interface";
import styles from './Card.module.scss'
import {Button} from "@mui/material";
import Modal from "../../../../shared/components/modal/Modal";
import PokemonModalInfo from "../PokemonModalInfo/PokemonModalInfo";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

interface CardPropsInterface {
    name: string
    url: string
}

const Card = ({name, url}: CardPropsInterface) => {

    const [pokemonData, setPokemonData] = useState<PokemonDataInterface>({} as PokemonDataInterface)
    const [pokemonImg, setPokemonImg] = useState<string>('')
    const [pokemonType, setPokemonType] = useState<Array<PokemonTypeInterface>>([])
    const [isOpened, setIsOpened] = useState<boolean>(false)

    const onClose = () => {
        setIsOpened(false)
    }

    const getPokemonData = () => {
        RequestSender.get(url).then((request) => {
            return request.json()
        }).then((result) => {
            setPokemonData(result)
            setPokemonImg(result.sprites.front_default)
            setPokemonType(result.types)
        })
    }

    useEffect(() => {
        getPokemonData()
    }, [])



    return (
        <div className={styles.CardWrapper}>
            <div className={styles.PokemonImgWrapper}>
                <img src={pokemonImg ?? pokemonData.sprites.front_default} alt="image"/>
            </div>
            <div className={styles.PokemonInfo}>
                <p className={styles.PokemonName}>Name: {name}</p>
                <p className={styles.PokemonExpirience}>Expirience: {pokemonData.base_experience}</p>
                <p className={styles.PokemonWeight}>Weight: {pokemonData.weight}</p>
                <div className={styles.PokemonTypeWrapper}>
                    <p>Type(s):</p>
                    <div className={styles.PokemonTypeItems}>
                        {pokemonType.map((el: PokemonTypeInterface) => <span
                            style={{color: getColor(el.type.name)}}
                            key={el.type.name}>
                            {el.type.name}
                        </span>)}
                    </div>
                </div>
            </div>
            <Button className={styles.PokemonButton} onClick={() => setIsOpened(true)}>More info</Button>
            <Modal open={isOpened} onClose={onClose}>
                <PokemonModalInfo moreInfo={pokemonData} pokemonImg={pokemonImg} name={name}/>
            </Modal>
        </div>
    );
};

export default Card;

const getColor = (type: string) => {
    if (type) {
        if (type.toLocaleLowerCase().includes('normal')) {
            return '#787878'
        }
        if (type.toLocaleLowerCase().includes('fire')) {
            return '#e86a46'
        }
        if (type.toLocaleLowerCase().includes('water')) {
            return '#2e91db'
        }
        if (type.toLocaleLowerCase().includes('electric')) {
            return '#dbb925'
        }
        if (type.toLocaleLowerCase().includes('grass')) {
            return '#3a9032'
        }
        if (type.toLocaleLowerCase().includes('ice')) {
            return '#34d1c5'
        }
        if (type.toLocaleLowerCase().includes('fighting')) {
            return '#d58928'
        }
        if (type.toLocaleLowerCase().includes('poison')) {
            return '#8141c8'
        }
        if (type.toLocaleLowerCase().includes('ground')) {
            return '#8d6f2c'
        }
        if (type.toLocaleLowerCase().includes('flying')) {
            return '#6eadd0'
        }
        if (type.toLocaleLowerCase().includes('psychic')) {
            return '#e17797'
        }
        if (type.toLocaleLowerCase().includes('bug')) {
            return '#a0a12a'
        }
        if (type.toLocaleLowerCase().includes('rock')) {
            return '#a9a089'
        }
        if (type.toLocaleLowerCase().includes('ghost')) {
            return '#704272'
        }
        if (type.toLocaleLowerCase().includes('dragon')) {
            return '#5074b3'
        }
        if (type.toLocaleLowerCase().includes('dark')) {
            return '#4e4546'
        }
        if (type.toLocaleLowerCase().includes('steel')) {
            return '#6fb0c8'
        }
        if (type.toLocaleLowerCase().includes('fairy')) {
            return '#da92df'
        }

    }

    return ''
}

