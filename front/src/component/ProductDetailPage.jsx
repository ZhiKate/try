import {useState} from 'react';
import ProductCard from '../utils/productCard';
import { useParams } from 'react-router-dom';
import CarouselPart from '../utils/CarouselPart';
import { Button,Divider} from '@mui/material';
import {IconButton,Box} from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const pictures=[
  "/picture/test.png",
  "/picture/test.png",
  "/picture/test.png"

]

function ProductDetailPage() {
  const { productId } = useParams();
  const [wishClicked, setWishClicked] = useState(false);
  const [informationOpen, setInformationOpen] =useState(true);
  const [auctionInformationOpen, setAuctionInformationOpen] =useState(true);

  const handleInformationClick = () => {
    setInformationOpen(!informationOpen);
  };
  const handleAuctionInformationClick = () => {
    setAuctionInformationOpen(!auctionInformationOpen);
  };

  const handleButtonClick = () => {
    setWishClicked(!wishClicked);
  };

  const AuctionInformationPart=()=>{
    return(
      <div className='auction_information_section'>
            <ListItemButton onClick={handleInformationClick} sx={{backgroundColor:'white'}}>
                <ListItemText primary="AUCTION INFORMATION" />
                {informationOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={informationOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <div className='row'>
                    <div className='product_information_lable Name'>Name</div>
                    <div className='product_information_value Name'>XXX</div>
                  </div>
                  <div className='row'>
                    <div className='product_information_lable Auctioneer'>Auctioneer </div>
                    <div className='product_information_value Auctioneer'>XXX</div>
                  </div>
                  <div className='row'>
                    <div className='product_information_lable Type'>Type</div>
                    <div className='product_information_value Type'>XXX</div>
                  </div>
                  <div className='row'>
                    <div className='product_information_lable Date'>Date(s)</div>
                    <div className='product_information_value Date'>XXX</div>
                  </div>
                  <div className='row'>
                    <div className='product_information_lable Auction_Date/Time_Info'>Auction Date/Time Info</div>
                    <div className='product_information_value Auction_Date/Time_Info'>XXX</div>
                  </div>
                  <div className='row'>
                    <div className='product_information_lable Preview_Date/TimeDate'>Preview Date/Time</div>
                    <div className='product_information_value Preview_Date/Time'>XXX</div>
                  </div>
                  <div className='row'>
                    <div className='product_information_lable Checkout_Date/Time'>Checkout Date/Time</div>
                    <div className='product_information_value Checkout_Date/Time'>XXX</div>
                  </div>
                  <div className='row'>
                    <div className='product_information_lable Location'>Location</div>
                    <div className='product_information_value Location'>XXX</div>
                  </div>
                  <div className='row'>
                    <div className='product_information_lable Buyer_Premium'>Buyer Premium</div>
                    <div className='product_information_value Buyer_Premium'>XXX</div>
                  </div>
                  <div className='row'>
                    <div className='product_information_lable Description'>Description</div>
                    <div className='product_information_value Description'>XXX</div>
                  </div>
                </List>
            </Collapse>
      </div>
    )
  }
  const productInformationPart=()=>{
    return(
      <div className='product_detail_information_section'>
            <ListItemButton onClick={handleAuctionInformationClick} sx={{backgroundColor:'white'}}>
                <ListItemText primary="INFORMATION" />
                {auctionInformationOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={auctionInformationOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <div className='row'>
                    <div className='product_information_lable Lot'>Lot #</div>
                    <div className='product_information_value Lot'>XXX</div>
                  </div>
                  <div className='row'>
                    <div className='product_information_lable Group_Category'>Group - Category </div>
                    <div className='product_information_value Group_Category'>XXX</div>
                  </div>
                  <div className='row'>
                    <div className='product_information_lable Lead'>Lead</div>
                    <div className='product_information_value Lead'>XXX</div>
                  </div>
                  <div className='row'>
                    <div className='product_information_lable Description'>Description</div>
                    <div className='product_information_value Description'>XXX</div>
                  </div>
                </List>
            </Collapse>
      </div>
    )
  }


  return (
    <div className='product_detail_content_body'>
      <div className='product_detail_title'>
        <h1>{productId}</h1>
      </div>

      <div className='product_detail_main_content'>
        <div className='product_image_carousel'>
          <CarouselPart pictures={pictures}/>
        </div>

        <div className='execution_in_product_detail_page'>
            <IconButton 
                // color="transparent"
                aria-label="wish"
                onClick={handleButtonClick}
                // sx={{ color: wishClicked ? 'red' : 'inherit' }}
            >
              {wishClicked? 
                <StarIcon sx={{color:'black'}}/>
                : <StarBorderIcon/>
              }
            </IconButton>
            {
              wishClicked? <label>Unwatch</label>:<label>watch</label>
            }
          <h3>High Bid: CAD</h3>
          <p># BID</p>
          <p>Time Remaining:</p>
          <Button sx={{ width:'100%',backgroundColor:'black',color:'white',fontWeight:'bold','&:hover':{backgroundColor:'blue'}}}>BID #</Button>
          <p>Date(s) 5/12/2024 - 5/15/2014</p>

          <Divider/>


        </div>


      </div>

      <div className='reminder_information'>
        <div className='bidding_notice'>
          <h3>BIDDING NOTICE:</h3>
          <p>Please read our Terms & Condition before you join our auction. Booking must be made 24 hours prior To ensure that you have your items ready. We do not accept same-day reservations with less than 24 hours' notice, as all reservation orders are prepared the day before.</p>
        </div>
        <div className='auction_notice'>
          <h3>AUCTION NOTICE:</h3>
          <p>This auction will start soft closing on Wednesday, May 15th at 7:00 PM EST. If you have any questions, feel free to contact us (customerservice@proverbsauction.ca)</p>
        </div>
      </div>
      {productInformationPart()}
      {AuctionInformationPart()}

    </div>
  );
}

export default ProductDetailPage;