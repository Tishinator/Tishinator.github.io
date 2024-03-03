import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import appImage from '../../assets/db2.PNG'

function PTCGSimDeckBuilder() {
    const bottomSpacing = "mb-1"
    const textStyle = {
      fontSize: '1rem'
    }
    return(
        <Container style={textStyle}>
            <Row className={bottomSpacing}> {/* mb-3 adds margin-bottom for spacing between rows */}
                <Col xs={12} md={2}> {/* xs=12 makes it full width on small screens, md=4 adjusts size on medium screens */}
                    Project Type:
                </Col>
                <Col xs={12} md={8}>
                    Web Application
                </Col>
            </Row>

            <Row className={bottomSpacing}>
                <Col xs={12} md={2}>
                    Front-end:
                </Col>
                <Col xs={12} md={8}>
                    React
                </Col>
            </Row>

            <Row className={bottomSpacing}>
                <Col xs={6} md={2}>
                    Back-end:
                </Col>
                <Col xs={6} md={4}>
                    None
                </Col>
                <Col xs={6} md={2}>
                    API's utilized:
                </Col>
                <Col xs={6} md={4}>
                <a href="https://docs.pokemontcg.io/">PokemonTCG.io</a>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col>
                    <Row className={bottomSpacing}>
                        <Col xs={12}>
                            <strong>Summary:</strong>
                        </Col>
                    </Row>

                    <Row className='mb-5'>
                        <Col xs={12}>
                            The Pokemon trading card game Simulator (PTCG-SIM) Deck Builder is an add-on to the fan-made simulator <a href="https://ptcgsim.online/">https://ptcgsim.online/</a>.
                            It was developed in response to the minor annoyances associated with using CSV files for deck creation within the simulator. This add-on simplifies the deck-building process, making it more accessible and user-friendly.
                            <br></br> <br></br>
                            After sharing the application with the creator of the PTCG-SIM, they eagerly integrated the application into the simulator, where it is now utilized by players all around the world.
                        </Col>
                    </Row>
                    <Row> 
                        <Button variant='danger' size='lg' onClick={()=>window.open('https://tishinator.github.io/PTCGDeckBuilder/', '_blank', 'noopener,noreferrer')}>Check it out Live!</Button>
                    </Row>
                </Col>
                <Col>
                    <Image src={appImage} width={'auto'} height={'500px'} rounded />
                </Col>
                
            </Row>
            
        </Container>
    );
};

export default PTCGSimDeckBuilder;