import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
function navbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className='mx-1'>
			<LinkContainer to="/">
          <Navbar.Brand>Navbar</Navbar.Brand>
		  </LinkContainer>
          <Nav className="me-auto">
			<LinkContainer to="/">
			<Nav.Link>Home</Nav.Link>
			</LinkContainer>
			<LinkContainer to="/About">
			<Nav.Link>About</Nav.Link>
			</LinkContainer>
          </Nav>
        </Container>
      </Navbar>
	  </>
  );
}

export default navbar;