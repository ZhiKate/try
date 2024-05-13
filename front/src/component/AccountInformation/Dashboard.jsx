import React from 'react';
import Button from '@mui/material/Button';
// import '../../CSS/AccountInfo.css';

import PersonIcon from '@mui/icons-material/Person';

import {RefreshButton} from '../../utils/myAuctionPart';


function DashBoard() {
  return (
    <div className='my_account_element_content_panel'>
        {/* show your name */}
        <div className='my_account_element_content_name'>
            <PersonIcon style={{ fontSize: '2rem', marginLeft:'0.5rem', marginRight:'0.5rem' }}/> UserName
        </div>

        {/* show the auction summary */}
        <div className='my_account_auction_element_content_items_summary'>

            <div className='filter_color_button'>
                <button className='account_show_button account_winning_bids_button'>
                    <div className='button_num'>
                    9
                    </div>
                    <div className='button_text'>
                    Winning
                    </div>
                </button>

                <button className='account_show_button account_pending_bids_button'>
                <div className='button_num'>
                9
                </div>
                <div className='button_text'>
                    Pending
                </div>
                </button>
                
                <button className='account_show_button account_outbids_button'>
                <div className='button_num'>
                9
                </div>
                <div className='button_text'>
                    Outbid
                </div>
                </button>

                <button className='account_show_button account_watched_lots_button'>
                <div className='button_num'>
                9
                </div>
                <div className='button_text'>
                    Watched
                </div>
                </button>

                <button className='account_show_button account_credit_button'>
                <div className='button_num'>
                $ 0.00
                </div>
                <div className='button_text'>
                    Credit
                </div>
                </button>
            </div>
            <div className='account_refresh_button'>
                <RefreshButton/>
            </div>
        </div>

        {/* Show your account information */}
        <div className='my_auction_element_content_member_details'>
            <h1>Member Details</h1>
            <div className='my_auction_element_content_member_details_without_title'>
                <div className='member_details_part'>
                    <div className='info1 email'>
                        <div className='account_info_label'>Email</div>
                        <div className='account_info_input_value'>string</div>
                    </div>
                    <div className='info1 phone'>
                        <div className='account_info_label'>Phone</div>
                        <div className='account_info_input_value'>string</div>
                    </div>
                    <div className='info1 mailing'>
                        <div className='account_info_label'>Mailing List</div>
                        <div className='account_info_input_value'>string</div>
                    </div>
                </div>
                <div className='member_details_part'>
                    <div className='info1 address'>
                        <div className='account_info_label'>Address</div>
                        <div className='account_info_input_value'>string1111111111111111111111111111111111111111111</div>
                    </div>
                </div>
                <div className='member_details_part'>
                <div className='info1 member_since'>
                        <div className='account_info_label'>Member Since </div>
                        <div className='account_info_input_value'>string</div>
                    </div>
                <div className='info1 last_login'>
                        <div className='account_info_label'>Last Login </div>
                        <div className='account_info_input_value'>string</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoard;