import './AboutUsStyle.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import foodImage from '../assets/food.jpg';
import restaurantImage from '../assets/restaurant.jpg';

export default function AboutUs() {
    return (
        <div>
            <Container fluid className='about-us'>
                <Row>
                    <Col className='col-info' lg={6}>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nulla vel velit eget eros porttitor aliquet.
                            Praesent euismod, nisi eget malesuada aliquam,
                            velit diam ultricies velit, sit amet placerat nisl libero a felis.
                            Duis auctor, nunc nec convallis dapibus,
                            erat urna aliquet nisl, non aliquam leo risus sit amet diam.
                        </p>
                    </Col>
                    <Col className='col-img' lg={6}>
                        <div className='images'>
                            <Image className='img1' src={foodImage} alt='Mediterranean food' />
                            <Image className='img2' src={restaurantImage} alt='Little Lemon restaurant in Chicago' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}