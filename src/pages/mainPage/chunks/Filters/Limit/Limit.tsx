import React, {useEffect, useState} from 'react';
import {FormControl, FormHelperText, InputLabel, MenuItem, SelectChangeEvent} from "@mui/material";
import Select from "@material-ui/core/Select/Select";
import styles from './Limit.module.scss'
import {Urls} from "../../../../../shared/urls/urls";
import {useActions} from "../../../../../hooks/useActions";
import {useSearchInputStyles} from "../../../../../styles/hooks/useSearchInputStyles";


const Limit = () => {

    const searchInputStyle = useSearchInputStyles()

    const {getPokemonsList} = useActions()

    const [limit, setLimit] = useState<string>('20');

    useEffect(() => {
        getPokemonsList(`${Urls.GET_POKEMONS_LIST_URL}?limit=${limit}`)
    }, [limit])

    const handleChange = (event: SelectChangeEvent) => {
        setLimit(event.target.value as string);
    };

    useEffect(() => {
        getPokemonsList(`${Urls.GET_POKEMONS_LIST_URL}?limit=${limit}`)
    }, [limit])

    return (
        <div className={styles.LimitSelectWrapper}>
            <FormControl
                className={searchInputStyle.formInputWrapper}
                variant="standard"
                sx={{m: 1, minWidth: 120}}
                style={{margin: 0}}
            >
                <Select
                    value={limit}
                    // @ts-ignore
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{'aria-label': 'Show per page'}}
                    style={{background: "white", borderRadius: 10, height: 37, paddingLeft: 10}}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>
                <FormHelperText style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, padding: 5}}>Show per page</FormHelperText>
            </FormControl>

        </div>
    );
};

export default Limit;
