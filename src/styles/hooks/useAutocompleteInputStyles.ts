import {makeStyles} from "@material-ui/core/styles";

export const useAutocompleteInputStyles = makeStyles({
    autoCompleteInput: {
        "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'][class*='MuiOutlinedInput-marginDense'] .MuiAutocomplete-input": {
            paddingRight: 60,
            paddingTop: 9
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent"
        },
        "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
            paddingRight: 10,
        },
        "& .MuiFormLabel-filled": {
            color: "#646363"
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
                borderColor: 'transparent',
                padding: 'auto'
            }
        },

        "& .MuiFormHelperText-root.Mui-error": {
            fontSize: 14,
            padding: 0,
            textAlign: 'start'
        },
        "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
            borderRadius: 10
        }
    },
    inputRoot: {
        'label[data-shrink=false] + & ::-webkit-input-placeholder': {
            opacity: '0.5 !important',
        },
    },
    disableShrink: {
        "& .MuiInputLabel-shrink": {
            display: "none",
        },
    },
    select: {
        background: 'white',
        height: 37,
        borderRadius: '10px',

        "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'][class*='MuiOutlinedInput-marginDense'] .MuiAutocomplete-input": {
            paddingRight: 60,
            paddingTop: 9,
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
        },
        "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {
            paddingRight: 10,
        },
        "& .MuiFormLabel-filled": {
            color: "#646363",
            fontSize: 14,
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#646363"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent"
        },
        "& .MuiOutlinedInput-root": {
            height: 37,

            "& fieldset": {
                border: '2px solid',
                borderRadius: '50px',
                borderColor: 'transparent',
                padding: 'auto',
            },
        },
        "& .MuiInputLabel-outlined.MuiInputLabel-shrink ": {
            top: "0px !important"
        },
        "& label ": {
            top: "-9px !important"
        },
        "& .MuiFormHelperText-root.Mui-error": {
            fontSize: 14,
            padding: 0,
            textAlign: 'start'
        },
        "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "red",
            borderRadius: 10
        }
    },
    dateInput: {
        "& .MuiFormHelperText-root.Mui-error": {
            fontSize: '14px',
            margin: 0,
            paddingLeft: 15,
        }
    },
    delInputIcon: {
        position: 'absolute',
        right: '25px',
        top: '4px',
        border: 'none',
        background: 'none',
        height: '30px',
        minWidth: '30px',

        "&:focus": {
            background: 'none'
        }
    },

})