import React from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Navbar from '../../components/NavbarMenu/NavbarMenu'

const Header = () => {
    return(
        <div className='Header' >
            <Toolbar/>
            <Navbar/>
        </div>
    )
}

export default Header