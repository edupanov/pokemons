import {makeStyles} from "@material-ui/core/styles";

export const useSelectInputStyle = makeStyles({
    root: {
        "&.MuiFormControl-root": {
            marginTop: '10px',
            marginBottom: '10px'
        },
        "& .MuiOutlinedInput-input": {
            padding: '7px 30px 7px 6px'
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#27bfc8"
        },
        "& .MuiFormLabel-filled": {
            color: "#27bfc8"
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: "#27bfc8"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#27bfc8"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: '2px solid',
                borderRadius: '50px',
                borderColor: '#27bfc8'
            }
        },
        "& .MuiSelect-select:focus": {
            borderRadius: '50px'
        }
    }
})