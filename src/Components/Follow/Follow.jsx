import './follow.css'
import XIcon from './../../img/x.svg'
import TgIcon from './../../img/tg.svg'
import CardImage from './../../img/frogs_card.png'

const Follow = () => {
  return (
    <section className="follow" id='follow'>
      <div className="container follow__container">
        <div className="flex follow__content">
          <div className="follow__content-left">
            <h2 className="follow__title">
              <span className="follow__title-prefix">Follow</span> Follow Pepe <br /> on social media
            </h2>
            <div className="follow__social-link flex">
              <a href="https://play.google.com/store/" className="follow__img-link">
                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_40_1945)">
                  <path d="M25.5 0C11.4172 0 0 11.4172 0 25.5C0 39.5828 11.4172 51 25.5 51C39.5828 51 51 39.5828 51 25.5C51 11.4172 39.5828 0 25.5 0Z" fill="#95B71D"/>
                  <path d="M28.2897 23.1924L39.2059 10.5032H36.6192L27.1405 21.5211L19.5701 10.5032H10.8384L22.2864 27.1642L10.8384 40.4708H13.4253L23.435 28.8355L31.43 40.4708H40.1616L28.289 23.1924H28.2897ZM14.3574 12.4506H18.3308L36.6203 38.6119H32.6469L14.3574 12.4506Z" fill="#101010"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_40_1945">
                  <rect width="51" height="51" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>

              </a>
              <a href="https://play.google.com/store/" className="follow__img-link">
                <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_40_1946)">
                  <path d="M26.1 51C40.1866 51 51.6 39.5866 51.6 25.5C51.6 11.4134 40.1866 0 26.1 0C12.0134 0 0.599976 11.4134 0.599976 25.5C0.599976 39.5866 12.0134 51 26.1 51ZM12.2684 24.9475L36.8546 15.4679C37.9957 15.0556 38.9924 15.7463 38.6226 17.4718L38.6247 17.4696L34.4385 37.1918C34.1282 38.59 33.2974 38.93 32.135 38.2713L25.76 33.5729L22.6851 36.5351C22.3451 36.8751 22.0582 37.162 21.3995 37.162L21.8521 30.6744L33.6671 20.0005C34.1814 19.5479 33.5523 19.2929 32.8745 19.7434L18.2736 28.9361L11.9794 26.9726C10.613 26.5391 10.5832 25.6062 12.2684 24.9475Z" fill="#95B71D"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_40_1946">
                  <rect width="51" height="51" fill="white" transform="translate(0.599976)"/>
                  </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
          <div className="follow__content-right">
            <img
              src={CardImage}
              height="570"
              width="720"
              className='follow__image'
              alt='GooglePlay'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
