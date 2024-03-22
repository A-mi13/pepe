
import './header.css'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import logoImg from '../../img/logo.svg'

function Header () {
    return (
      <>
      <section>
        <Navbar collapseOnSelect expand="md" variant="dark" className="navbar-dark">
          <Container className="header-container">
            <Navbar.Brand href="/" className='header__logo'>
              <img
                src={logoImg}
                height="50"
                width="141"
                className='d-inline-block align-top'
                alt='logo'
              />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' >
              <Nav className='ms-auto'>
                <Nav.Link className='ms-auto link' href="/">HOME</Nav.Link>
                <Nav.Link className='ms-auto link' href="#about">ABOUT US</Nav.Link>
                <Nav.Link className='ms-auto link' href="#tokenomics">TOKENOMICS</Nav.Link>
                <Nav.Link className='ms-auto link' href="#follow" >SOCIAL</Nav.Link>
              </Nav>
              <Button className='ms-auto float-end header-button-add'> Join us </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </section>
      </>
    )
}

export default Header;
