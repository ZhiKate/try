import logo from './logo.svg';
import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import './App.css';
import LoginTag from './component/log_navbar.jsx'
import DashBoard from './component/DashBoard.jsx';
import Footer from './component/Footer.jsx';
import Navbar from './component/Navbar.jsx';
import Home from './component/HomePage.jsx';
import About from './component/AboutPage.jsx';
import Contact from './component/ContactPage.jsx';
import AuctionSummary from './component/AuctionSummary.jsx';
import Cart from './component/cartPage.jsx';
import Appointment from './component/Appiontment.jsx';
import Services from './component/ServicePage.jsx';
import CurrentBids from './component/AuctionInformation/CurrentBids.jsx';
import AccountInfo from './component/AccountInfo.jsx';
import AuctionInfo from './component/AuctionInfo.jsx';
import Header from './utils/header.jsx';
import AuctionDetailPage from './component/AuctionDetailPage.jsx';
import ProductDetailPage from './component/ProductDetailPage.jsx';
import ClaimWarranty from './component/ClaimWarranty.jsx';

import './CSS/General.css'
import './CSS/AccountInfo.css';
import EditPassword from './component/AccountInformation/EditPassword.jsx';

function App() {
  const [showFooter, setShowFooter] = useState(false);
  const [accoutChoosePart,setAccountChoosePart]=useState('DashBoard');
  const [auctionChoosePart,setAuctionChoosePart]=useState('Current Bids');

  // when you scroll the website, execute this function to hidden or show footer.
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    if (windowHeight + scrollPosition >= documentHeight * 0.9) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  }; 

  const handleAccountPageChange=(value)=>{
    setAccountChoosePart(value);
  }
  const handleAuctionPageChange=(value)=>{
    setAuctionChoosePart(value);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* <Header/> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Router>
          <div className='app_navbar1'>
            <LoginTag handleAccountPageChange={handleAccountPageChange} handleAuctionPageChange={handleAuctionPageChange}/>  
          </div>
          <div className='app_navbar2'>
            <Navbar/> 
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/auction" element={<Auction />} /> */}
            <Route path="/AuctionInfo" element={<AuctionInfo handleAuctionPageChange={handleAuctionPageChange} auctionChoosePart={auctionChoosePart} />} />
            <Route path="/AccountInfo" element={<AccountInfo handleAccountPageChange={handleAccountPageChange} accoutChoosePart={accoutChoosePart} />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/claim_warranty" element={<ClaimWarranty />} />
            <Route path="/services" element={<Services />} />
            <Route path="/edit_password" element={<EditPassword />} />
            <Route exact path="/product/:productId" element={<ProductDetailPage/>} />
            <Route exact path="/auction/:auctionId" element={<AuctionDetailPage/>} />
            <Route exact path="/auction_summary/:auctionId" element={<AuctionSummary/>} />
            
            {/* <Route path="/current_bids" component={<CurrentBids/>}/> */}
            {/* <Route path="/account" element={<Account />} /> */}
          </Routes>
        </Router>
      
          <div className={`footer_container ${showFooter?'':'hidden'}`}>
          <Footer/>
          </div>
    </div>
  );
}

export default App;