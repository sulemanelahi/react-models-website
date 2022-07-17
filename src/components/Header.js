import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand className='pt-4'>Navbar</Navbar.Brand>
        <Nav className='me-auto'>
          <Link to='/models' className='link fs-5' style={{ paddingRight: '20px' }}>
            {/* <Nav.Link className='fs-5' > */}
            Models
          </Link>
          {/* </Nav.Link> */}
          {/* <Nav.Link className='fs-5'> */}
          <Link to='/models/add' className='link fs-5'>
            Subscription Form
          </Link>
          {/* </Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
