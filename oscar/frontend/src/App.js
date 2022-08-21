import React from 'react'
import {render} from 'react-dom';

import Home from './pages/Home/Home'

const App = () => {
    return (
        <div>
            <Home/>
        </div>
    );
}

const appDiv = document.getElementById("app");
render( <App/> , appDiv);