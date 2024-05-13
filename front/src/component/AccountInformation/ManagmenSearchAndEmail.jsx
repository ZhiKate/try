import { useState,useEffect } from 'react';
import Switch from '@mui/material/Switch';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export default function ManageSearchAndEmail() {
    const [subscription,setSubscription]=useState(false);
    const [bid_confirmation,setBid_confirmation]=useState(false);
    const [outbid_notification,setOutbid_notification]=useState(false);
    const [auction_event_reminders,setAuction_event_reminders]=useState(false);

    const handleSubscriptionClick = () => {
        setSubscription(!subscription);
        // then, update the email subscription value in the database table. 
        // there is two situation. 1. the email subscription is false, then you need to set the subscription,confirmation,
        // notification and remainder to false (same as 0). 2. if the subscription is true(1), then just set the 
        // subscription to true.


      };
    const handle_bid_confirmation_Click = () => {
        setBid_confirmation(!bid_confirmation);
      };
    const handle_outbid_notification_Click = () => {
        setOutbid_notification(!outbid_notification);
      };
    const handle_auction_event_reminders_Click = () => {
        setAuction_event_reminders(!auction_event_reminders);
      };
    useEffect(()=>{
        // get the data about user subscription(email subscription or not, ) from the database 
    },[])

    return(
        <div className='ManageSearchAndEmail_main_body'>
            <div className='email_subscription'>
                <h1>EMAIL SUBSCRIPTION</h1>
                <FormGroup>
                <FormControlLabel
                label="Subscribe to site email list"
                    control={<Switch checked={subscription} onChange={handleSubscriptionClick}/>}
                    sx={{ '& .MuiFormControlLabel-label': { fontSize: '1.4rem' } }}
                />
                </FormGroup>
            </div>

            {subscription && (

            <div className='subcription_details'>
                <h1>NOTIFICATION OPTIONS</h1>
                <FormGroup>
                <FormControlLabel
                label="Send Confirmation for Every Bid Placed"
                    control={<Switch checked={bid_confirmation} onChange={handle_bid_confirmation_Click}/>}
                    sx={{ '& .MuiFormControlLabel-label': { fontSize: '1.4rem' } }}
                />
                <FormControlLabel
                label="Send Notification when Outbid on an Item"
                    control={<Switch checked={outbid_notification} onChange={handle_outbid_notification_Click}/>}
                    sx={{ '& .MuiFormControlLabel-label': { fontSize: '1.4rem' } }}
                />
                <FormControlLabel
                label="Send Notification when Outbid on an Item"
                    control={<Switch checked={auction_event_reminders} onChange={handle_auction_event_reminders_Click}/>}
                    sx={{ '& .MuiFormControlLabel-label': { fontSize: '1.4rem' } }}
                />
                </FormGroup>
            </div>
            )}
      </div>
    )
}