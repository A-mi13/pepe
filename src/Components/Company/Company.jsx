import React, { useEffect, useState } from 'react';
import './company.css';
import BitMart from './../../img/bitmart.svg';
import Poloniex from './../../img/poloniex.svg';
import Bybit from './../../img/bybit.svg';
import Kucoin from './../../img/kucoin.svg';
import Mexc from './../../img/mexc.svg';
import Xt from './../../img/xt.svg';
import BitGet from './../../img/bitget.svg';

const Company = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [touchStartX, setTouchStartX] = useState(0);

const handleTouchStart = (e) => {
  setTouchStartX(e.touches[0].clientX);
};

const handleTouchEnd = (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const touchDiff = touchEndX - touchStartX;
  if (touchDiff > 0) {
    handleScrollLeft();
  } else if (touchDiff < 0) {
    handleScrollRight();
  }
};

const handleScrollLeft = () => {
  const container = document.querySelector('.company__list');
  if (container) {
    container.scrollTo({
      left: container.scrollLeft - 300,
      behavior: 'smooth',
    });
    setScrollPosition(container.scrollLeft - 300);
    // Показываем кнопку handleScrollRight
    const rightButton = document.querySelector('.company__scroll-btn.right');
    if (rightButton) {
      rightButton.style.display = 'block';
    }
  }
};

const handleScrollRight = () => {
  const container = document.querySelector('.company__list');
  if (container) {
    container.scrollTo({
      left: container.scrollLeft + 300,
      behavior: 'smooth',
    });
    setScrollPosition(container.scrollLeft + 300);
    // Проверяем, достигнут ли максимальный скролл вправо
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      // Если достигнут, скрываем кнопку handleScrollRight
      const rightButton = document.querySelector('.company__scroll-btn.right');
      if (rightButton) {
        rightButton.style.display = 'none';
      }
    }
  }
};
  
  return (
    <section className='company' onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className='container company__container'>
        <div className="company__scroll-wrapper">
          {windowWidth < 992 && scrollPosition > 0 && (
            <button className="company__scroll-btn left" onClick={handleScrollLeft}>&lt;</button>
          )}
          <ul className={`company__list flex${windowWidth < 992 ? ' slider' : ''}`}>
          <li className='company__item'>
          <a href="/#" className='company__item'>
            <img
              src={BitMart}
              height="28"
              width="120"
              className='d-inline-block align-top'/>
            </a>
          </li>
        <li className='company__item'>
          <a href="/#" className='company__item'>
            <img
              src={Poloniex}
              height="30"
              width="129"
              className='d-inline-block align-top'/>
              </a>
        </li>
        <li className='company__item'>
          <a href="/#" className='company__item'>
            <img
              src={Bybit}
              height="34"
              width="87"
              className='d-inline-block align-top'/>
              </a>
        </li>
        <li className='company__item'>
          <a href="/#" className='company__item'>
            <img
              src={Kucoin}
              height="29"
              width="122"
              className='d-inline-block align-top'/>
              </a>
        </li>
        <li className='company__item'>
          <a href="/#" >
            <img
              src={Mexc}
              height="18"
              width="119"
              className='d-inline-block align-top'/>
              </a>
        </li>
        <li className='company__item'>
          <a href="/#" className='company__item'>
            <img
              src={Xt}
              height="27"
              width="99"
              className='d-inline-block align-top'/>
              </a>
        </li>
        <li className='company__item'>
          <a href="/#" className='company__item'>
            <img
              src={BitGet}
              height="28"
              width="90"
              className='d-inline-block align-top'/>
              </a>
        </li>
          </ul>
          {windowWidth < 992 && (
            <button className="company__scroll-btn right" onClick={handleScrollRight}>&gt;</button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Company;