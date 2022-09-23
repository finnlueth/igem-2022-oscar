import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Redirect} from 'react-router-dom';

const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<p>This is the new Home page</p>}></Route>
                <Route path='/about' element={<p>This is the About page</p>}></Route>
            </Routes>
        </Router>
    );
}

export default RouterComponent