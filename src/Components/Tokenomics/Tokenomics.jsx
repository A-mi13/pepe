import './../../styles/common.css'
import './tokenomics.css'
import Copy from './../../img/Icon-copy.svg'

const Tokenomics = () => {
  return ( 
    <section className="tokenomics" id='tokenomics'>
      <div className="container tokenomics__container">
        <h2 className="tokenomics__title">
          <span className="tokenomics__span-title">Tokenomics</span> Tokenomics
        </h2>
        <p className="tokenomics__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
        <div className="tokenomics__input">
          <div className="input-blocks flex">
            <div className="input-block">
              <label htmlFor="symbol">Symbol</label>
              <input type="text" id="symbol" placeholder="WPepe" disabled />
            </div>
            <div className="input-block">
              <label htmlFor="tax">Tax</label>
              <input type="text" id="tax" placeholder="0/0"disabled  />
            </div>
            <div className="input-block">
              <label htmlFor="lp">LP</label>
              <input type="text" id="lp" placeholder="Burned forever" disabled />
            </div>
          </div>
          <div className="input-block-full">
            <label htmlFor="tokenAddress">Token Address</label>
            <input type="text" id="tokenAddress" placeholder="HhJpBhRRn4g.............qsrahTTUCZeZg4" disabled />
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.35 19.85C3.99877 19.85 3.32315 19.85 2.79022 19.6293C2.07964 19.3349 1.51508 18.7704 1.22075 18.0598C1 17.5268 1 16.8512 1 15.5V5.64C1 4.01585 1 3.20377 1.31608 2.58343C1.59411 2.03776 2.03776 1.59411 2.58343 1.31608C3.20377 1 4.01585 1 5.64 1H15.5C16.8512 1 17.5268 1 18.0598 1.22075C18.7704 1.51508 19.3349 2.07964 19.6293 2.79022C19.85 3.32315 19.85 3.99877 19.85 5.35M15.79 30H25.36C26.9842 30 27.7962 30 28.4166 29.6839C28.9622 29.4059 29.4059 28.9622 29.6839 28.4166C30 27.7962 30 26.9842 30 25.36V15.79C30 14.1658 30 13.3538 29.6839 12.7334C29.4059 12.1878 28.9622 11.7441 28.4166 11.4661C27.7962 11.15 26.9842 11.15 25.36 11.15H15.79C14.1658 11.15 13.3538 11.15 12.7334 11.4661C12.1878 11.7441 11.7441 12.1878 11.4661 12.7334C11.15 13.3538 11.15 14.1658 11.15 15.79V25.36C11.15 26.9842 11.15 27.7962 11.4661 28.4166C11.7441 28.9622 12.1878 29.4059 12.7334 29.6839C13.3538 30 14.1658 30 15.79 30Z" stroke="#95B71D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Tokenomics;
