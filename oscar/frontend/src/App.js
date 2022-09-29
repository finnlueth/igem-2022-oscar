import React from 'react'
import {render} from 'react-dom';

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