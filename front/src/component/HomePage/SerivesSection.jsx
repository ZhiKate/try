
import { useState } from "react";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  picture: {
    boxShadow: '0px 1px 4px #000000'
  },
  button: {
    fontSize:'1.2rem',
    fontWeight:'bold',
    backgroundColor: 'black',
    color: '#fff',
    margin: '2rem',
    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #787af5, #b137f8)',
    },
  },
});

const images=[
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
    'https://via.placeholder.com/600x400',
]
function SeriversSection(){
    const muiClass = useStyles();

    return(
        <div className="service_introduction">
            <div className="each_service pickup_service_introduction">
                <div>
                    <img src={images[0]} alt="pickup_service" className={muiClass.picture}></img>
                    <div className="text_introduction">
                        <h2>Reserve A Pickup</h2>
                        <p>
                        Please schedule your pickup time. Customers with appointments will receive priority service at the scheduled time. If you don’t have an appointment, you may have to wait for at least 30 minutes.
                        </p>
                    </div>
                </div>
                <Link  to={`/appointment`}>
                    <Button variant="contained"  className={muiClass.button}>
                        Start Reserve
                    </Button>
                </Link>
            </div>
            <div className="each_service delivery_service_introduction">
                <div>
                    <img src={images[1]} alt="delivery_service" className={muiClass.picture}></img>
                    <div className="text_introduction">
                        <h2>Reserve Shipping</h2>
                        <p>
                        The only way we can ship items out is via Beavery. You must create an account with your own username and password. You are able to place shipping request. You can then view your shipping invoice, and status of the request.
                        </p>
                    </div>
                </div>
                <a href="https://www.beavery.ca/auction-house-delivery"  target="_blank" rel="noopener noreferrer">
                    <Button variant="contained" className={muiClass.button}>
                        Start Reserve
                    </Button>
                </a>
            </div>
            <div className="each_service warranty_service_introduction">
                <div>
                    <img src={images[2]} alt="warranty_service" className={muiClass.picture}></img>
                    <div className="text_introduction">
                        <h2>Claim Warranty</h2>
                        <p>
                        We can only honor return and refund policy if the item does not match the description.
                        </p>
                    </div>
                </div>
                <Link  to={`/claim_warranty`}>
                    <Button variant="contained"  className={muiClass.button}>
                        Contact Us
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default SeriversSection;