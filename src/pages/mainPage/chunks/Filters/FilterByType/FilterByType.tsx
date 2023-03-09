import React, {useEffect, useState} from 'react';
import {FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";
import {PokemonTypesInterface} from "../../../../../shared/types/pokemonsData.interface";
import {useActions} from "../../../../../hooks/useActions";
import {Urls} from "../../../../../shared/urls/urls";
import styles from './FilterByType.moodule.scss'
import {useSearchInputStyles} from "../../../../../styles/hooks/useSearchInputStyles";

const FilterByType = () => {

    const searchInputStyle = useSearchInputStyles()

    const {getPokemonsByType, getPokemonsList} = useActions()

    const [type, setType] = useState('');
    const [types, setTypes] = useState<PokemonTypesInterface[]>([]);

    const {pokemonTypes} = useTypedSelector(state => state.pokemonsData)

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
    }

    useEffect(() => {
        setTypes(pokemonTypes)
    }, [pokemonTypes])

    useEffect(() => {
        if (type) {
            const checkedType = types.find(el => el.name === type)
            getPokemonsByType(checkedType!.url)
        } else getPokemonsList(Urls.GET_POKEMONS_LIST_URL)
    }, [type])

    return (
        <FormControl
            className={searchInputStyle.formInputWrapper}
            variant="standard"
            sx={{m: 1, minWidth: 120}}
            style={{margin: 0}}
        >
            <Select
                value={type}
                onChange={handleChange}
                displayEmpty
                inputProps={{'aria-label': 'Select the type'}}
                style={{background: "white", borderRadius: 10, height: 37, paddingLeft: 10}}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {types.map(el => <MenuItem value={el.name} key={el.name}>{el.name}</MenuItem>)}
            </Select>
            <FormHelperText style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, padding: 5}}>Select the
                type</FormHelperText>
        </FormControl>
    );
};

export default FilterByType;
