import React from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Navbar from '../../components/Navbar/Navbar'

const Header = () => {
    return(
        <div className='Header'>
            <Toolbar/>
            <Navbar/>
        </div>
    )
}

export default Header