import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';
import RouterPage from './pages/RouterComponent/RouterComponent'
import Favicon from "react-favicon";

import styles from './app.css'

const App = () => {
    return (
        <div className="App">
              <Favicon url="http://localhost:8000/media/icons/favicon.ico"></Favicon>
            <RouterPage/>
        </div>
    );
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render( <App/> );