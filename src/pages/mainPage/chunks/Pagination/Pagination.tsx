import React, {useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, SelectChangeEvent} from "@mui/material";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useActions} from "../../../../hooks/useActions";
import Select from '@material-ui/core/Select/Select';

const Pagination = () => {

    const {getPokemonsList} = useActions()

    const {next, previous} = useTypedSelector(state => state.pokemonsData.data)

    return (
        <div>

           <Button disabled={!previous} onClick={()=>getPokemonsList(previous!)}>Previos</Button>
           <Button disabled={!next} onClick={()=>getPokemonsList(next!)}>Next</Button>
        </div>
    );
};

export default Pagination;
