import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginTag from './log_navbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import PanToolIcon from '@mui/icons-material/PanTool';
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate(); 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("AnchorEL is: ",event.currentTarget.id);
    console.log("open is: ",open);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleClose(); 
  };

  const menuList=()=>{
    return(
      <div>
      {
        anchorEl && anchorEl.id === 'service-button' ? 
        <Menu
        id="service-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'service-button',
        }}
        sx={{
          // '& .MuiPaper-root': {
          //   width: anchorEl ? anchorEl.clientWidth : null,
          // },
        }}
       >
          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem> */}
          <ListSubheader>Delivery Services: </ListSubheader>
          <MenuItem value="pickup" onClick={() => handleNavigate('/appointment')}>Pickup</MenuItem>
          <a href="https://www.beavery.ca/auction-house-delivery" target="_blank" rel="noopener noreferrer">
          <MenuItem onClick={() => handleClose()}>Shipping</MenuItem>
          </a>
          {/* <MenuItem value='delivery' onClick={() => handleNavigate('/services')}>Delivery</MenuItem> */}
          
          <Divider/>
          <ListSubheader>Warranty: </ListSubheader>
          <MenuItem onClick={() => handleNavigate('/claim_warranty')}>Claim Waranty</MenuItem>
       </Menu>
       :null
        }
        {anchorEl && anchorEl.id === 'auction-button' ? 
          <Menu
          id="auction-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'auction-button',
          }}
          sx={{
            // '& .MuiPaper-root': {
            //   width: anchorEl ? anchorEl.clientWidth : null,
            // },
          }}
        >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem> */}
            <MenuItem onClick={() => handleNavigate('/auction_summary/all')}>ALL Current Auctions</MenuItem>
            <MenuItem onClick={() => handleNavigate('/auction_summary/past')}>Past Auctions</MenuItem>
            <Divider/>
            <ListSubheader>Current Auction: </ListSubheader>
            <MenuItem onClick={() => handleNavigate('/auction_summary/auctionId')}>May 05 -- Online Auctions</MenuItem>
        </Menu>
        :null
        }
        {anchorEl && anchorEl.id === 'about-button' ? 
          <Menu
          id="about-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'about-button',
          }}
          sx={{
            // '& .MuiPaper-root': {
            //   width: anchorEl ? anchorEl.clientWidth : null,
            // },
          }}
        >
            <MenuItem onClick={() => handleNavigate('/about_proverbs_auction')}>About Proverbs Auction</MenuItem>
            <MenuItem onClick={() => handleNavigate('/how_to_bid')}>How to Bid</MenuItem>
            <MenuItem onClick={() => handleNavigate('/payment_pickup_and_delivery')}>Payment,Pickup and Delivery</MenuItem>
            <MenuItem onClick={() => handleNavigate('/terms_condition')}>Terms & Condition</MenuItem>
            <MenuItem onClick={() => handleNavigate('/warranty_and_returns')}>Warranty and Returns</MenuItem>
            <MenuItem onClick={() => handleNavigate('/services')}>Services</MenuItem>
        </Menu>
        :null
        }
        </div>
    )
  }
  return (
    <div className='nav_menu_list'>
    <nav className='navbar2'>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/auction">Auction</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul> */}
        <Button id="home-button" onClick={() => handleNavigate('/')}>
          <HomeIcon style={{ marginRight: '5px' }}/>Home
        </Button>
        <Button
          id="auction-button"
          aria-controls={open ? 'auction-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
         <GavelRoundedIcon style={{ marginRight: '5px' }}/>Auction<ArrowDropDownIcon className='pull_icon'/>
        </Button>

        <Button
          id="about-button"
          aria-controls={open ? 'about-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
         <InfoOutlinedIcon style={{ marginRight: '5px' }}/> About <ArrowDropDownIcon className='pull_icon'/>
        </Button>

        <Button
          id="service-button"
          aria-controls={open ? 'service-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <PanToolIcon style={{ marginRight: '5px' }}/>Services <ArrowDropDownIcon className='pull_icon'/>
        </Button>
        <Button id="contact-button" onClick={() => handleNavigate('/contact')}>
          <CallIcon style={{ marginRight: '5px' }}/>Contacts
        </Button>
        {menuList()}
    </nav>
    </div>
  );
}

export default Navbar;