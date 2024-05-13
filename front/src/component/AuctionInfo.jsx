import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link, useActionData } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CurrentBids from './AuctionInformation/CurrentBids';
import WatchList from './AuctionInformation/WatchList';
import TopPicks from './AuctionInformation/TopPicks';
import MyAuctions from './AuctionInformation/MyAuctions';
import PastBids from './AuctionInformation/PastBids';
import PastWatchList from './AuctionInformation/PastWatchList';


function AuctionInfo(props) {
  // const navigate = useNavigate(); 
  const {handleAuctionPageChange,auctionChoosePart}=props;

  const handleChange = (event, newValue) => {
    // setValue(newValue);
    handleAuctionPageChange(newValue);
  };
  // const handleNavigate = (path) => {
  //   navigate(path); 
  // };
  const selectedComponent=()=>{
    switch(auctionChoosePart) {
      case 'Current Bids':
        return <CurrentBids/>;
      case 'Watch List':
        return <WatchList/>;
      case 'Top Picks':
        return <TopPicks/>;  
      case 'My Auctions':
        return <MyAuctions/>;
      case 'Past Bids':
        return <PastBids/>; 
      case 'Past Watch List':
        return <PastWatchList/>; 
  }
  }

  return (
    <div className='my_auction_element_content_body'>
      <div className='my_aution_element_navigate'>
        <Tabs value={auctionChoosePart} onChange={handleChange} aria-label="disabled tabs example" >
          <Tab value="Current Bids" label="Current Bids" />
          <Tab value="Watch List" label="Watch List" />
          <Tab value="Top Picks" label="Top Picks"/>
          <Tab value="My Auctions" label="My Auctions"/>
          <Tab value="Past Bids" label="Past Bids"/>
          <Tab value="Past Watch List" label="Past Watch List"/>
        </Tabs>
      </div>
      {/* <div className='my_auction_element_summary_panel'>
        summary Panel
      </div> */}

          {selectedComponent()}

    </div>
  );
}

export default AuctionInfo;