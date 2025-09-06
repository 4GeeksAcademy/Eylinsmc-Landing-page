import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function GridExample() {
  return (
    <Row xs={1} md={4} className="g-4 mx-2 mb-3">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="src/img/image.png" />
            <Card.Body className="text-center">
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center mb-0 bg-white">
              <Button variant="primary" className="fs-5">Find Out More!</Button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;