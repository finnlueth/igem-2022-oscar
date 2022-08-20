import React from 'react'
import {render} from 'react-dom';

import Header from './containers/header/Header';
import Home from './pages/Home/Home'
import Footer from './containers/footer/Footer';

const App = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}

const appDiv = document.getElementById("app");
render( <App/> , appDiv);