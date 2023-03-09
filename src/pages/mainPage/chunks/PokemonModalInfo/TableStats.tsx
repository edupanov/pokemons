import React from 'react';
import {PokemonStatsInterface} from "../../../../shared/types/pokemonsData.interface";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
interface TableStatsInterface {
    stats: Array<PokemonStatsInterface>
}

const TableStats = ({stats}: TableStatsInterface) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            stats.map((el) => {
                                    return <TableCell
                                        style={{textAlign: 'center'}}
                                        key={el.stat.name}
                                    >
                                        {el.stat.name}
                                    </TableCell>
                                }
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stats.map((row) => (
                        <TableCell
                            component="th"
                            scope="row"
                            key={row.stat.name}
                            style={{textAlign: 'center'}}
                        >
                            {row.base_stat}
                        </TableCell>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableStats;
