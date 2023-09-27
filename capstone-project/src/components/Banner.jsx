import './BannerStyle.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import bruschettaImage from '../assets/bruschetta.jpeg'

export default function Banner() {
    return (
        <div>
            <Container fluid className='banner'>
                <Row>
                    <Col className='info' md={7}>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Button>Reserve a table</Button>
                    </Col>
                    <Col className='img' md={5}>
                        <Image src={bruschettaImage} alt='Bruschetta dish' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}