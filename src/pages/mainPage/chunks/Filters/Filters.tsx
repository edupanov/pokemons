import React from 'react';
import Limit from "./Limit/Limit";
import FilterByName from "./FilterByName/FilterByName";
import FilterByType from "./FilterByType/FilterByType";
import style from './Filter.module.scss'

const Filters = () => {
    return (
        <div className={style.FiltersWrapper}>
            <Limit/>
            <FilterByName/>
            <FilterByType/>
        </div>
    );
};

export default Filters;
