import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../styles/index.css';
import { Container } from 'react-bootstrap';


function WithHeaderExample() {
    return (
        <Card className="border-0 p-2 m-0">
            <Container fluid className="m-0 p-2">
                <Card.Body className="jumbotron-height bg-light mx-2 rounded">
                    <Card.Title className="display-3">A Warm Welcome!</Card.Title>
                    <Card.Text className="fs-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quisquam perspiciatis quae minus quas officiis qui corrupti blanditiis voluptates, fugit reprehenderit deserunt. Recusandae animi tenetur autem velit voluptatum eaque unde.
                    </Card.Text>
                    <Button variant="primary" className="fs-5">Call to action!</Button>
                </Card.Body>
            </Container>
        </Card>
    );
}

export default WithHeaderExample;