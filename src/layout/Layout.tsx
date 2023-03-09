import * as React from 'react'
import styles from './Layout.module.scss'
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import Header from '../pages/header/Header';

type LayoutProps = {
    children: React.ReactNode
};

const Layout = (props: LayoutProps) => {

    return (
        <div className={styles.layoutWrapper}>
            <Header />
            <ThemeProvider theme={theme}>
                <div className={styles.container}>
                    <div className={styles.mainBlockContainer}>
                        {props.children}
                    </div>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default Layout

const theme = createTheme({
    palette: {
        primary: {
            main: '#2fc582',
        },
    },
})
