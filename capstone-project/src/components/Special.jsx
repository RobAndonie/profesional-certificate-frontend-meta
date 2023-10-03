import Card from 'react-bootstrap/Card'

export default function Special(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img src={props.src} alt={props.alt} />
            <Card.Body>
                <div className='special-data'>
                    <Card.Title>{props.title}</Card.Title>
                    <h5 className="mb-2 text-muted">{props.price}</h5>
                </div>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}