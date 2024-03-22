import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About.jsx';
import Airdrop from './Components/Airdrop/Airdrop.jsx';
import Company from './Components/Company/Company.jsx';
import Follow from './Components/Follow/Follow.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import Promo from './Components/Promo/Promo.jsx';
import Tokenomics from './Components/Tokenomics/Tokenomics.jsx';
import './styles/reset.css'
import './styles/common.css'

function App() {
  return (
    <>
    <body>
      <div className='tyui'>
        <Header />
        <Promo />
        <Company />
        <About />
        <Airdrop />
        <Tokenomics />
        <Follow />
        <Footer />
      </div>
    </body>
    </>
  );
}

export default App;
