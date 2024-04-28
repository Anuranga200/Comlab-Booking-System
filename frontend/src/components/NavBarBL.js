import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.ico'; 
import './styles.css';

function NavBarBL() {
  return (
    <>
      <Navbar className="navbar-green">
        <Container>
            <Navbar.Brand href="#Home">
              <div className="d-flex align-items-center">
                <img
                  alt=""
                  src={logo}
                  style={{ width: '30px', height: '30px', marginRight: '10px' }}
                />
                <div>
                  <h3>CO1 Lab Booking System</h3>
                  <p>Faculty of Engineering - University of Jaffna</p>
                </div>
              </div>
            </Navbar.Brand>   
            <Nav>
                <Nav.Link href="#pricing" className="ml-auto">Sign in</Nav.Link>
                <Nav.Link href="#pricing" className="ml-auto">Admin</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarBL;