import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './madebymunich.css'

const MadeByMunich = () => {
  return (
    <div className="bg-secondary">
        <Container fluid>
                <Row>
                    <Col>
                        <div>Made with ❤️ by iGEM Munich</div>
                    </Col>
                </Row>
        </Container>
    </div>
  )
}

export default MadeByMunich