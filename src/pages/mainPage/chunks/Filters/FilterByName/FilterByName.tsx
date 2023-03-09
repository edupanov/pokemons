import React, {useEffect, useState} from 'react';
import {useActions} from "../../../../../hooks/useActions";
import {Urls} from "../../../../../shared/urls/urls";
import {getPokemonByName} from "../../../../../shared/requests/PokemonsDataSlice";
import Input from "../../../../../shared/components/Input/Input";

const FilterByName = () => {

    const {getPokemonByName, getPokemonsList} = useActions()

    const [name, setName] = useState('');

    useEffect(() => {
        name
            ? getPokemonByName({
                url: `${Urls.GET_POKEMONS_BY_NAME_LIST_URL}`, name
            })
            : getPokemonsList(Urls.GET_POKEMONS_LIST_URL)

    }, [name])

    return (
        <Input value={name} setValue={setName} label={'Pokemon name'} disabledLabel={false}/>
    );
};

export default FilterByName;
