import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Divider } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';

export default function LoginTag(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate(); 

  const{handleAccountPageChange,handleAuctionPageChange}=props

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAccountPage=(e)=>{
    // console.log('account page section check:',e.target.textContent);
    handleAccountPageChange(e.target.textContent);
  }
  const handleAuctionPage=(e)=>{
    // console.log('auction page section check:',e.target.textContent);
    handleAuctionPageChange(e.target.textContent);
  }
  const handleNavigate = (path) => {
    // handleAccountPageChange(e.target.textContent);
    navigate(path);
    handleClose(); 
  };

  return (
    <div>

      <nav className="navbar1">
        <div className="navbar1-left">
          <Link to={`/`} className="logo-link">
            <img src="./picture/LOGO.png" alt="Logo" className="logo" />
          </Link>
        </div>


        <div className="navbar1-right">

          <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          UserName
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
         >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem> */}

            <Divider/>
            <ListSubheader><strong>Auction Information:</strong> </ListSubheader>
            <MenuItem value="Current Bids" onClick={(e) => {handleNavigate('/AuctionInfo');handleAuctionPage(e)}}>Current Bids</MenuItem>
            <MenuItem value="Watch List" onClick={(e) => {handleNavigate('/AuctionInfo'); handleAuctionPage(e)}}>Watch List</MenuItem>
            <MenuItem value="Top Picks" onClick={(e) => {handleNavigate('/AuctionInfo');handleAuctionPage(e)}}>Top Picks</MenuItem>
            <MenuItem value="My Auction" onClick={(e) => {handleNavigate('/AuctionInfo');handleAuctionPage(e)}}>My Auction</MenuItem>
            <MenuItem value="Past Bids" onClick={(e) => {handleNavigate('/AuctionInfo');handleAuctionPage(e)}}>Past Bids</MenuItem>
            <MenuItem value="Past Watch List" onClick={(e) => {handleNavigate('/AuctionInfo');handleAuctionPage(e)}}>Past Watch List</MenuItem>
            <Divider/>
            <ListSubheader><strong>Account Information:</strong></ListSubheader>
            <MenuItem  onClick={(e) => {{handleNavigate('/AccountInfo');handleAccountPage(e)}}}>DashBoard</MenuItem>
            <MenuItem  onClick={(e) => {{handleNavigate('/AccountInfo');handleAccountPage(e)}}}>Payment Methods</MenuItem>
            <MenuItem  onClick={(e) => {{handleNavigate('/AccountInfo');handleAccountPage(e)}}}>Profile</MenuItem>
            <MenuItem  onClick={(e) => {{handleNavigate('/AccountInfo');handleAccountPage(e)}}}>Manage Search and Email</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
         </Menu>
            <a href="/cart" className="nav-link"><ShoppingCartIcon color="primary"/></a>
          </div>
      </nav>


    </div>
  );
}

