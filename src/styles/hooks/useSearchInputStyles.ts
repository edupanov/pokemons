import {makeStyles} from "@material-ui/core/styles";

export const useSearchInputStyles = makeStyles({
    mainInputWrapper: {
        width: '100%',
        height:"fit-content",
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: '10px',
        margin:0
    },
    inputWrapper: {
        width: 200,
        height:37,
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: '10px',
        marginBottom: 15,
        '@media (max-width: 593px)': {
            width: '100%'
        }
    },
    formInputWrapper: {
        width: 200,
        height:37,
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: '10px',
        marginBottom: 15,
        '@media (max-width: 593px)': {
            width: '100%'
        }
    },

    longInputWrapper: {
        position: 'relative',
        height:37,
        backgroundColor: '#fff',
        borderRadius: '10px',
        width: 400,
    },
    longInputWrapperBlock: {
        position: 'relative',
        height:37,
        backgroundColor: '#fff',
        borderRadius: '10px 0 0 10px',
        width: 400
    },
    delimiter: {
        height:37,
        borderRight: '1px solid lightgrey'
    },
    mainInput: {
        "&.MuiFormControl-root": {
            width: '100%',
            background: 'whitesmoke'
        },
        "& .MuiOutlinedInput-input": {
            paddingRight: 40,
            background: 'white'

        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent"
        },
        "& .MuiFormLabel-filled": {
            color: "#747577"
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#646363"
        },
        "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent"
        },
        "& .MuiInputBase-root.Mui-disabled": {
            borderColor: "transparent",
            border: "none",
            color: "#646363"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: '1px solid',
                borderRadius: '10px',
                borderColor: 'transparent'
            }
        },
        "& .MuiFormHelperText-root.Mui-error" : {
            textAlign: "center"
        }
    },
    longSearchInput: {
        "&.MuiFormControl-root": {
            width: 400,
        },
        "& .MuiOutlinedInput-input": {
            paddingRight: 40,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent"
        },
        "& .MuiFormLabel-filled": {
            color: "#747577"
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#646363"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: '2px solid',
                borderRadius: '50px',
                borderColor: 'transparent'
            }
        }
    },
    searchInput: {
        "&.MuiFormControl-root": {
            width: 230,
        },
        "& .MuiOutlinedInput-input": {
            paddingRight: 40,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
             borderColor: "transparent"
        },
        "& .MuiFormLabel-filled": {
            color: "#747577"
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#646363"
        },

        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent"
        },

        "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent"
        },

        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: '2px solid',
                borderRadius: '50px',
                borderColor: 'transparent'
            }
        }
    },
    delInputIcon: {
        position: 'absolute',
        right: '5px',
        top: '4px',
        border: 'none',
        background: 'none',
        height: '30px',
        minWidth: '30px',

        "&:focus": {
            background: 'none'
        }
    },
    searchInputIcon: {
        position: 'absolute',
        right: '5px',
        top: '3px',
        border: 'none',
        background: 'none',
        height: '30px',
        minWidth: '30px',

        "&:focus": {
            background: 'none'
        }
    },
    clearDateInputIcon: {
        position: 'absolute',
        right: '35px',
        top: '2px',
        border: 'none',
        background: 'none',
        height: '30px',
        minWidth: '30px',

        "&:focus": {
            background: 'none'
        }
    },
    searchBtn: {
        height: 37,
        width: 110,
        backgroundColor: '#fff',
        borderRadius: '10px',
        paddingTop:7,
        fontWeight:600,
        color:'#2e2e2ede',
        marginRight:10
    },
    searchBtnBlock: {
        height: 37,
        width: 110,
        backgroundColor: '#fff',
        border: "none",
        borderRadius: '0 10px 10px 0',
        paddingTop:7,
        fontWeight:600,
        color:'#2e2e2ede',
        marginRight:10
    },
    ClearBtn: {
        height: 37,
        width: 110,
        backgroundColor: '#fff',
        borderRadius: '10px',
        paddingTop:7,
        fontWeight:600,
        color:'#484848de',
        marginRight:10
    },
    ExtBtn: {
        height: 37,
        width: 85,
        backgroundColor: '#fff',
        borderRadius: '10px',
        paddingTop:7,
        fontWeight:600,
        color:'#1a1818de',
        boxShadow: '-2px 2px 22px -19px rgba(34, 60, 80, 0.16)'
    },
    QuestionBtn: {
        "&.MuiButton-outlined.Mui-disabled": {
            border: 'none'
        },
        marginLeft: 5,
        border: 'none',
        fontWeight:600,
        color:'#1a1818de',
        boxShadow: '-2px 2px 22px -19px rgba(34, 60, 80, 0.16)',

    },
    dateInput: {
        "& .MuiFormHelperText-root.Mui-error": {
            fontSize: '14px',
            margin: 0,
            padding: 0,
        }
    },
})
