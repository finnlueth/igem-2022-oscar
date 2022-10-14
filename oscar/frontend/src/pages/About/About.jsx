import React from 'react';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';

import {Alert, Container, Row, Col, InputGroup, Card} from 'react-bootstrap';

import styles from './about.css'

const About = () => {
    return (
        <div className='About'>
            <Header/>
            <Container fluid className='body-container'>
                <h3>About</h3>
                <Card className="position-static">
                    <Card.Body>
                        <Card.Title>About Oscar</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Our Mission</Card.Subtitle>
                        <Card.Text>
                        From the interviews with research experts who are active in the field of CAR T-cell therapy, it became apparent that the lack of databases for CAR systems was a constraint hampering the entire community. Since we also struggled with the problem of cataloging and sharing our CARs all the time, we decided to simplify the work for future researchers, including iGEM teams and us.
                        We came up with OSCAR (open-source CAR) - a database that stores available CARs in one place. By performing extensive literature research, we managed to add over 100 CARs. Our modular database schema supports the separate storage of CAR parts, for instance, the receptor, the linker, or the transmembrane domain. By breaking down the data, the creation of new CARs with new functionalities is enabled, and sharing discoveries is effortless. Due to OSCAR’s open-source nature, iGEM teams can adapt and use our tools in the future
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted text-center">
                        <img src={'/media/images/software_no_background.png'} alt='logo' height="256"/>
                    </Card.Footer>
                </Card>
                <br/>
                <Card className="position-static">
                    <Card.Body>
                        <Card.Title>The underlying Technology</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Our Tools</Card.Subtitle>
                        <Card.Text>
                            Throughout our journey through the CAR-focused academic community, we had our eyes opened to a few problems.<br/>
                            One of these was the difficulty of collaboration between projects, teams, and researchers (see human practices). Proteins are cataloged in the PDB (Protein Data Base), and nucleotide sequences are stored in the GenBank. Yet, for CARs, there is no such thing.
                            After consulting with industry experts, we came up with a solution that would pose as a platform for interactions between academics.<br/>
                            We came up with “OSCAR”: Open Source Chimeric Antigen Receptors, a database for cataloging and sharing CARs.<br/>
                            Since not all of us are computer science prodigies, we figured that simply creating a database and accessing data via SQL queries would not suffice.<br/>
                            As such, we built a dynamic web app, which makes submitting and accessing research data a breeze.<br/>
                        </Card.Text>
                    </Card.Body>
                        <Card.Body className="text-muted text-center">
                            <img src={'/media/images/oscar_database.png'} alt='logo' height="512"/>
                        </Card.Body>
                    <Card.Body>
                        <Card.Text>
                            The bedrock of our app is made up of Django, a Python framework with an included REST API which would allow for seamless communication between our React.js frontend, and PostgreSQL, an open-source relational database that stores all our CARs.<br/>
                            We used the Bootstrap framework to stylize the application and then bundled it all together into a small package with Webkit to provide a seamless user experience.<br/>
                            In the end, we deployed the app to an Amazon Elastic Compute Cloud instance while the production database runs on the Amazon Relational Database Service.<br/>
                            <br/>
                            We won’t stop at just cataloging CARs and fostering academic interactions, we want to continue by building an integrated development environment where anyone can assemble CARs from already existing parts.<br/>
                            <br/>
                            Let’s see where our journey takes us!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <Card className="position-static">
                    <Card.Body>
                        <Card.Title>About SpecifiCAR</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Our Legacy</Card.Subtitle>
                        <Card.Text>
                        The iGEM team Munich 2022 is breaking boundaries in CAR T-cell engineering with their project SpecifiCAR by improving the specificity of CAR T-Cell Therapy using microenvironment factors of solid tumors.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
                <Card className="position-static">
                    <Card.Body>
                        <Card.Title>About iGEM Munich</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Our Identity</Card.Subtitle>
                        <Card.Text>
                        A joint team from the Technical University of Munich and the Ludwigs-Maximilians-University Munich,
                        comprised of ten students motivated to take part in the international Genetically Engineered Machine (iGEM) Competition - 
                        the biggest student competition in synthetic biology in the world.
                        In team 2022, the iGEM team Munich is working on improving CAR T-cell therapy with their project SpecifiCAR.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
            </Container>
            <Footer/>
        </div>
    );
}

export default About