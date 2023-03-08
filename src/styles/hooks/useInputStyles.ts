import {makeStyles} from "@material-ui/core/styles";

export const useInputStyle = makeStyles({
        root: {
            "& .MuiFormHelperText-root.Mui-error": {
                fontSize: '12px',
                paddingLeft: '0',
                marginLeft: '0'
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
            }
        },
    divisionInput: {
            
    }
    }
);