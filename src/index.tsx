import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './app/App'
import store from './store/store'


ReactDOM.render(
    <Provider store={store}>
        <App/>
     </Provider>, document.getElementById('root'))
