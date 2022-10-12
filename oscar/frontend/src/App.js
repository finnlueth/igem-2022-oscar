import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';
import RouterPage from './pages/RouterComponent/RouterComponent'

import styles from './app.css'

const App = () => {
    return (
        <div className="App">
            {/* <Favicon href="oscar/frontend/static/frontend/public/icons/oscar_bear.png"></Favicon> */}
            <RouterPage/>
        </div>
    );
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render( <App/> );