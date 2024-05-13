import React, {useState} from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import '../CSS/summaryPanel.css'


export default function SummeryPanel(props) {

    const {handleHideChange,handleGroupChange,hide_checked,group_checked}=props;
    const handleClick_Hide =()=>{
        handleHideChange();
    }  
    const handleClick_Group =()=>{
        handleGroupChange();
    }
    return (
        <React.Fragment>
            {/* <div className='filter_color_button'>
                <button className='show_button winning_bids_button'>
                    <div className='button_num'>
                    9
                    </div>
                    <div className='button_text'>
                    Winning
                    </div>
                </button>

                <button className='show_button pending_bids_button'>
                <div className='button_num'>
                9
                </div>
                <div className='button_text'>
                    Pending
                </div>
                </button>
                
                <button className='show_button outbids_button'>
                <div className='button_num'>
                9
                </div>
                <div className='button_text'>
                    Outbid
                </div>
                </button>

                <button className='show_button watched_lots_button'>
                <div className='button_num'>
                9
                </div>
                <div className='button_text'>
                    Watched
                </div>
                </button>
            </div> */}

            <div className='winning_high_bid_total'>
                <label>Winning "High Bid" Total: NUM</label>
            </div>
            <div className='winning_your_max_bid_total'>
                <label>Winning "Your Max Bid" Total: NUM</label>
            </div>

            <div className='filter_small_color_button'>
                <button className='show_small_button winning_bids_button' title="winning bids">
                    <div className='button_num'>
                    9
                    </div>
                </button>

                <button className='show_small_button pending_bids_button' title="pending bids">
                <div className='button_num'>
                9
                </div>
                </button>
                
                <button className='show_small_button outbids_button' title="outbids">
                <div className='button_num'>
                9
                </div>
                </button>

                <button className='show_small_button watched_lots_button' title="watched lots">
                <div className='button_num'>
                9
                </div>
                </button>
            </div>





        </React.Fragment>

    );
  
}