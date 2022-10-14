import React from 'react'
import {Container, Row, Col, InputGroup} from 'react-bootstrap';
import styles from './splash.css'

const Splash = () => {
  return (
    <Container className='spash-container'>
        <Row>
            <Container className="d-flex justify-content-center">
                    <img src={'/media/icons/oscar-bear-grey.svg'} alt='logo' height="160"/>
                    <img src={'/media/icons/oscar-dark.svg'} alt='logo' height="190"/>
            </Container>
        </Row>
        <Row>
            <Container className="d-flex justify-content-center text-end splash-text">
                <Row>
                    <div>
                        A database for open source chimeric antigen receptors.
                    </div>
                    <div>
                        Version 1.0, Release 2022_09
                    </div>
                </Row>
            </Container>
        </Row>
    </Container>

  )
}

export default Splash