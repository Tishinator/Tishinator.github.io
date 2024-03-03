import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import appImage from '../../assets/DatasetGen.png'

function DatasetGenerator() {
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
                    Python Script
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
                            The DatasetGenerator.py script is a Python program designed to apply transformations on an image, specifically rotations.
                            The script prompts the user for input on whether they would like to rotate the image and along which axis (x, y, z).
                            It also allows the user to specify the rotation range (default is 360 degrees).
                            The program provides an estimate of the number of generated images and the required disk space before proceeding with the operation.
                            <br></br><br></br>
                            This augmentation can improve model robustness by increasing the variability in training images, including their orientation, without the need for additional data collection which can be vital in Machine Learning.
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Image src={appImage} width={'auto'} height={'500px'} style={{"paddingLeft":"2.5vw", 'maxWidth': '85vw', 'object-fit': 'contain'}} rounded />
                </Col>
                
            </Row>
            
        </Container>
    );
};

export default DatasetGenerator;