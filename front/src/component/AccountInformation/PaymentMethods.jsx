import {useState} from 'react';
import Box from '@mui/material/Box';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {Button} from '@mui/material';


function PaymentMethods(){
    const [open, setOpen] =useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleClick = () => {
      setOpen(!open);
    };


    return(
        <div className='payement_methods_content'>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                <AccountBalanceWalletIcon />
                </ListItemIcon>
                <ListItemText primary="ADD A PAYMENT METHOD" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {/* <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                </ListItemButton> */}
                <div className='payment_method_add_form'>
                    <form className='payment_edit_form' onSubmit={handleSubmit}>
                        <div className='payment_name'>
                            <h2>PAYMENT METHOD NICKNAME</h2>

                        </div>
                        <div className='card_detail'>
                            <h2>CARD DETAILS</h2>
                        </div>
                        <div className='billing_address>'>
                            <h2>BILLING ADDRESS</h2>
                        </div>
                        <div className='rules'>
                            <p>By providing my credit/debit card information and clicking below, I authorize 402 Ventures, LLC dba HiBid and AuctionFlex to:</p>
                            <p>(1)verify my credit card by placing a pending charge up to $1 USD on the credit card;</p>
                            <p>(2)save my credit card information in accordance with PCI DSS requirements; and</p>
                            <p>
                            (3)allow the auctioneer/seller responsible for the auction(s) that I register for to process my credit card in connection with any transaction(s) between me and the auctioneer/seller subject to their auction terms and conditions and any other arrangements or agreements between me and the auctioneer/seller. This authorization will remain in full force and effect until I provide 402 Ventures, LLC with written notification of my termination of such authorization in such time and in such manner as to afford 402 Ventures, LLC a reasonable opportunity to act on such written notice of termination.
                            </p>
                        </div>

                        <Button className='submit_button' variant='contained'  type='submit'
                            sx={{
                                backgroundColor: 'black', 
                                transition: 'background-color 0.3s',
                                '&:hover': {
                                backgroundColor: '#333333',
                                },
                            }}
                        >
                            Save
                        </Button>
                    </form>
                </div>
                </List>
            </Collapse>
        </div>
    )
}

export default PaymentMethods;