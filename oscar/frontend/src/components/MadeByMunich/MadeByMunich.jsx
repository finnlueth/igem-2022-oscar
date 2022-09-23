import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './madebymunich.css'

const MadeByMunich = () => {
  return (
    <div className="bg-dark">
        <Container fluid>
            <Row>
                <Col>
                    <div className='text-light'>Made with 🧠 by iGEM Munich</div>
                </Col>
                <Col>
                    <div class='text-light float-end'>Copyright © 2022 iGEM Munich. All rights reserved.</div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default MadeByMunich