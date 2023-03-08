﻿import {makeStyles} from "@material-ui/core/styles";

export const useCheckboxStyle = makeStyles({
    root: {
        paddingLeft: 10,
        '&:hover': {
            // backgroundColor: 'transparent',
        },
        '& .MuiFormLabel-root': {
            color: '#808299'
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: '#808299'
        }
    },
    container: {
        '@media (max-width: 900px)': {
            flexDirection: 'column'
        }
    },
    icon: {
        borderRadius: '50%',
        backgroundColor: '#fff',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#27bfc8',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#27bfc8',
        },
    },
});