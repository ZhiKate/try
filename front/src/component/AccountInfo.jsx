import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link, useActionData } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DashBoard from './AccountInformation/Dashboard';
import Profile from './AccountInformation/Profile';
import PaymentMethods from './AccountInformation/PaymentMethods';
import ManageSearchAndEmail from './AccountInformation/ManagmenSearchAndEmail';



function AccountInfo(props) {

  // value represent the show content for the /accountInfo
  // const [value, setValue] =useState("DashBoard");
  // const navigate = useNavigate();
  const {handleAccountPageChange,accoutChoosePart}=props;

  const handleChange = (event, newValue) => {
    handleAccountPageChange(newValue)
    // setValue(newValue);
  };
  // const handleNavigate = (path) => {
  //   navigate(path); 
  // };
  const selectedComponent=()=>{
    switch(accoutChoosePart) {
      case 'DashBoard':
        return <DashBoard/>
      case 'Profile':
        return <Profile/>;
      case 'Payment Methods':
        return <PaymentMethods/>;
      case 'Manage Search and Email':
        return <ManageSearchAndEmail/>;  
  }
  }

  return (
    <div className='my_account_element_content_body'>
      <div className='my_aution_element_navigate'>
        <Tabs value={accoutChoosePart} onChange={handleChange} aria-label="disabled tabs example" >
          <Tab value="DashBoard" label="DashBoard" />
          <Tab value="Profile" label="Profile" />
          <Tab value="Payment Methods" label="Payment Methods" />
          <Tab value="Manage Search and Email" label="Manage Search and Email"/>
        </Tabs>
      </div>
      {/* <div className='my_auction_element_summary_panel'>
        summary Panel
      </div> */}

          {selectedComponent()}

    </div>
  );
}

export default AccountInfo;