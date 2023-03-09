import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import Actions from '../store/RootActions'
import {AppDispatch} from '../store/store'

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>()
    return bindActionCreators(Actions, dispatch)
}