import './../../styles/common.css'
import './promo.css'
import AppStore from './../../img/AppStore.svg'
import GooglePlay from './../../img/GooglePlay.svg'

const Promo = () => {
  return ( 
    <section className="promo">
    <div className="promo__background-overlay promo__background-overlay_green"></div>
    <div className="promo__background-overlay promo__background-overlay_blue"></div>
      <div className="container promo__container">

      <div className="content flex">
          <div className="promo__left-content">
          <span className="promo__span-title">Welcome</span>
            <h1 className="promo__title">Welcome!</h1>
            <p className="promo__text">This is Pepe, the famous frog. <br /> And he opened his wallet!</p>
            <div className='flex promo__content'>
              <div className='promo__logo-top'></div>
              <div className='promo__link'>
                <p className='promo__link-title'>Pepe Wallet</p>
                <p className='promo__link-descr'>You can download the wallet for your smartphone</p>
                <a href="https://www.apple.com/app-store/" className="promo__img-link">
                  <img
                    src={AppStore}
                    className='d-inline-block align-top img-button'
                    alt='AppStore'
                  />
                </a>
                <a href="https://play.google.com/store/" className="promo__img-link">
                  <img
                    src={GooglePlay}
                    className='d-inline-block align-top img-button'
                    alt='GooglePlay'
                  />
                </a>
              </div>
            </div>
          </div>
          
          <div className="promo__right-content"> </div>
          <div className='promo__logo-right'></div>
        </div>

      </div>
    </section>
   );
}
 
export default Promo;