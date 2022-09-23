import React from 'react'
import {render} from 'react-dom';

import Home from './pages/Home/Home'
import RouterPage from './pages/RouterComponent/RouterComponent'


const App = () => {
    return (
        <div>
            <RouterPage/>
        </div>
    );
}

const appDiv = document.getElementById("app");
render( <App/> , appDiv);