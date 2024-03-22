import './footer.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import FooterLogoImg from '../../img/footer_logo.svg'
import AppStore from './../../img/AppStore.svg'
import GooglePlay from './../../img/GooglePlay.svg'

const Footer = () => {
  return ( 
    <section className="footer">
        <Navbar collapseOnSelect expand="md" className="navbar-dark footer-navbar">
          <Container className="footer__container">
            <Navbar.Brand href="/" className="footer__logo">
              <img
                src={FooterLogoImg}
                height="70"
                width="201"
                className='footer__logo d-inline-block align-top'
                alt='logo'
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' className='footer__collapse' >
              <div className="flex ms-auto footer__nav">
                <Nav >
                  <Nav.Link className='ms-auto footer__link' href="/">ГЛАВНАЯ</Nav.Link>
                  <Nav.Link className='ms-auto footer__link' href="#about">О НАС</Nav.Link>
                  <Nav.Link className='ms-auto footer__link' href="#tokenomics">ТОКЕНОМИКА</Nav.Link>
                </Nav>
                <p className="footer__copyright">&copy; 2023 PEPE WALLET • All Rights Reserved</p>
              </div>
              <div className='flex footer__link-icon ms-auto'>
                <a href="https://www.apple.com/app-store/" className='ms-auto footer__button'>
                  <img
                    src={AppStore}
                    height="45"
                    width="110"
                    className='d-inline-block align-top'
                    alt='AppStore'
                  />
                </a>
                <a href="https://play.google.com/store/" className='ms-auto footer__button'>
                  <img
                    src={GooglePlay}
                    height="45"
                    width="110"
                    className='d-inline-block align-top'
                    alt='GooglePlay'
                  />
                </a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
   );
}
 
export default Footer;
