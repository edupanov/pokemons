import * as React from 'react'
import {FC} from 'react'
import styles from './Header.module.scss'
import {AppBar, Toolbar} from '@material-ui/core'

const Header: FC = () => {

    return (
        <AppBar position='sticky' color='inherit'>
            <Toolbar className={styles.HeaderToolBar}>
            </Toolbar>
        </AppBar>
    )
}

export default Header
