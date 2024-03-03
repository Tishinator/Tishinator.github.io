import { Col, Container, Row } from 'react-bootstrap';
import vid from '../../assets/videos/socialsaver_demo.mp4'
function SocialSaver() {
    const bottomSpacing = "mb-1"
    const textStyle = {
      fontSize: '0.8vw'
    }
    return (
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
              Django / Python
          </Col>
          <Col xs={6} md={2}>
              API's utilized:
          </Col>
          <Col xs={6} md={4}>
          <a href="https://developers.facebook.com/docs/">Facebook Graph API</a>
          </Col>
        </Row>
        <hr></hr>
        <Row className={bottomSpacing}>
          <Col xs={12}>
            <strong>Summary:</strong>
          </Col>
        </Row>

        <Row className={bottomSpacing}>
          <Col xs={12}>
            Social Saver was my first attempt at creating a React-based application. Born out of the desire to seperate myself from Facebook,
             I created the Social Saver to provide a way for me to view and download my photos off of the platform. 
            <br></br><br></br>
            Unfortunately, due to restrictions on the Facebook Graph API, I was unable to publish this application. Below is a video demonstation of the application.
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <video style={{'height': '50vh'}} controls>
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>

      </Container>

    );
  }
export default SocialSaver;  