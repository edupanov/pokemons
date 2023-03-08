import {makeStyles} from "@material-ui/core/styles";

export const useHomeCardStyle = makeStyles((theme) => ({
    root: {
        height: 'fit-content',
        width: '100%',
        marginTop: 90,
        paddingLeft: 12,
        justifyContent: "flex-start"
    },
    navLink: {
        // "&.warning": {
        //     textDecoration: 'none',
        // },
        "&:hover": {
            color: 'black',
            textDecorationColor: 'black'
        }
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        height: '220px',
        fontSize: 18,
        maxWidth: '330px',
        minWidth: '330px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#212529',
        borderRadius: '10px',
        backgroundColor: theme.palette.success.light,
        boxShadow: 'lightgreen 0 0 5px 2px',

        "&:hover": {
            backgroundColor: 'lightgreen',
            boxShadow: 'none',
            padding: theme.spacing(2) + 1
        },
        
        "&.warning": {
            backgroundColor: theme.palette.warning.light,
            boxShadow: '#ffd76d 0 0 5px 2px',

            "&:hover": {
                backgroundColor: '#ffd76d',
                boxShadow: 'none',
            },
        },

        "& h5": {
            fontSize: '18px',
            marginLeft: '10px',
            display: 'flex',
            overflow: 'hidden',
            whiteSpace: 'pre-line'
        },
        "& .external-link": {
            overflow: 'hidden',
            whiteSpace: 'nowrap',

            "& span": {
                textDecoration: 'underline',
                textDecorationColor: 'black'
            },

            "& span:hover": {
                color: '#fff',
                textDecorationColor: '#fff'
            }
        },
        "&.error": {
            backgroundColor: theme.palette.error.light,
            boxShadow: 'lightcoral 0 0 5px 2px',

            "&:hover": {
                backgroundColor: 'lightcoral',
                boxShadow: 'none',
            },
        }
    },
    order1: {
        order: 1
    },
    order2: {
        order: 2
    },
    order3: {
        order: 3
    },
}));