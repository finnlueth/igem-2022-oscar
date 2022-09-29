import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Redirect} from 'react-router-dom';
import Home from '../Home/Home'
import About from '../About/About'
import Changes from '../Changes/Changes';
import Submit from '../Submit/Submit';
import Documentation from '../Documentation/Documentation';
import Browse from '../Browse/Browse'

const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/changes' element={<Changes/>}></Route>
                <Route path='/documentation' element={<Documentation/>}></Route>
                <Route path='/submit' element={<Submit/>}></Route>
                <Route path='/browse' element={<Browse/>}></Route>
            </Routes>
        </Router>
    );
}

export default RouterComponent