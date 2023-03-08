import {makeStyles} from '@material-ui/core/styles'

export const useMarkedCheckboxStyle = makeStyles({
    root: {
        display: "flex", 
        alignItems: "center",
        height: '100%'
    },
    icon: {
        display: "flex",
        alignItems: "center",
        width: 24, 
        height: 24,
        marginLeft: 3
    },
    text: {
        marginTop: 2
    }
});