import React from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Navbar from '../../components/NavbarMenu/NavbarMenu'
import { Container } from 'react-bootstrap'

const Header = () => {
    return(
        <div className='mb-5'>
            <div className='Header' >
                <Toolbar/>
                <Navbar/>
                <br/>
            </div>
        </div >
    )
}

export default Header