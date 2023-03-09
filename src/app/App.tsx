import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../styles/base.scss';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import Layout from '../layout/Layout';
import routes from "../router/router";

// @ts-ignore
library.add(fas)

const App = () => (
    <BrowserRouter>
        <Layout>
            {routes}
        </Layout>
    </BrowserRouter>
);

export default App;
