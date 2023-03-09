import {Button, TextField} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSearchInputStyles} from "../../../styles/hooks/useSearchInputStyles";



type TInput = {
  value: string,
  setValue?: Function,
  disabled?:boolean,
  label?:string,
  type?:'number',
  disabledLabel?:boolean
  inputProps?:object
  error?:boolean
}

const Input = ({value,setValue, disabled,label,type,disabledLabel,inputProps,error}:TInput) => {

  const searchInputStyle = useSearchInputStyles()
  return (
      <div className={searchInputStyle.inputWrapper} style={{background:error ? '#ffc3c3' :''}}>
        <TextField
            variant={"outlined"}
            size="small"
            error={error}
            type={type ? type : 'text'}
            value={value}
            inputProps={inputProps}
            onChange={(event => setValue && setValue(event.target.value))}
            label={!disabledLabel ? label : ''}
            className={searchInputStyle.searchInput}
            style={{width:'200px'}}
            disabled={disabled}
        >
        </TextField>
        {
          value.length > 0 && setValue ?
              <Button
                  className={searchInputStyle.delInputIcon}
                  disableRipple={true}
                  onClick={(() => setValue(""))}>
                <FontAwesomeIcon icon="times" color="red" size="lg"/>
              </Button> :
              <Button
                  className={searchInputStyle.searchInputIcon}
                  disabled={true}>
                <FontAwesomeIcon icon="search" size="lg"/>
              </Button>
        }
      </div>
  );
};

export default Input;
