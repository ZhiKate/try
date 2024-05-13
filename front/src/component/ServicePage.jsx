import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function Services() {
  const [value, setValue] =useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='content_body'>
      <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
        <Tab label="Shipping" />
        <Tab label="Delivery" />
        <Tab label="Claim Warranty" />
      </Tabs>

    </div>
  );
}

export default Services;