import './airdrop.css'
import Token from './../../img/big_token.png'

const Airdrop = () => {
  return ( 
    <section className="airdrop">
      
      <div className="container airdrop__container">
        <div className="flex airdrop__content">
          <div className="airdrop__left">
            <h2 className="airdrop__title"> <span className="span-airdrop__title">Airdrop</span> HOLD PEPE -<br /> EARN WPEPE</h2>
            <p className="airdrop__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore </p>
          </div>
          <div className="airdrop__right">
            <img
                src={Token}
                height="493"
                width="472"
                className='d-inline-block align-top'/>
          </div>

        </div>

      </div>
    </section>
   );
}

export default Airdrop;