import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';

function CollapsibleExample() {
	return (
		<Navbar collapseOnSelect expand="lg" className="bg-dark navbar-dark text-light">
			<Container fluid className="justify-content-between d-flex text-center ms-3 me-3">
				<Navbar.Brand href="#home" className="text-light">Start Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" className="border border-light" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="m-auto">
					</Nav>
					<Nav className="me-0">
						<Nav.Link href="#home" className="text-light">Home</Nav.Link>
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#services">Services</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CollapsibleExample;