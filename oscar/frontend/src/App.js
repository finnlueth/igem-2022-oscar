import React from 'react'
import {render} from 'react-dom';

// import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <h1>OSCAR</h1>
            Test App.js
        </div>
    );
}

const appDiv = document.getElementById("app");
render( <App/> , appDiv);