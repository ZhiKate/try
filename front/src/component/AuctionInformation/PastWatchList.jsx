import React,{useRef,useState} from 'react';
import { InputLabel, Select, MenuItem } from '@mui/material';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';


import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import SummeryPanel from '../../utils/summaryPanel'
import { RefreshButton,SwitchButton,SelectedAuctionComponent,SelectedStatusComponent,SelectedRangeComponent } from '../../utils/myAuctionPart';


function PastWatchList() {
  const [openAuction, setOpenAuction] = useState(true);
  const [openRange, setOpenRange] = useState(true);
  const [openStatus, setOpenStatus] = useState(true);
  const [selectedAuction,setSelectedAuction]=useState("AllAuctions");
  const [selectedStatus,setSelectedStatus]=useState('ALL');
  const [selectedRange,setSelectedRange]=useState('Past 3 Month');
  const [hideChecked,setHideChecked]=useState(false);
  const [groupChecked,setGroupChecked]=useState(false);
  // const AuctionButtonRef=useRef(null);
  // const AuctionCollapseRef=useRef(null);
  const handleAuctionClick = () => {
    setOpenAuction(!openAuction);
  };

  const handleRangeClick = () => {
    setOpenRange(!openRange);
  };

  const handleStatusClick = () => {
    setOpenStatus(!openStatus);
  };
  const handleSelectedAuction=(e)=>{
    setSelectedAuction(e.target.value);
  }
  const handleSelectedStatus=(e)=>{
    setSelectedStatus(e.target.value);
  }
  const handleSelectedRange=(e)=>{
    setSelectedRange(e.target.value);
  }
  const handleCheckedHide=()=>{
    setHideChecked((prev)=> !prev);
  }
  const handleGroupHide=()=>{
    setGroupChecked((prev)=> !prev);
  }

  const returnFilterPart=()=>{
    return(
      <div>
        {/* filter list section */}
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          // component="nav"
          // aria-labelledby="nested-list-subheader"
          // subheader={
          //   <ListSubheader component="div" id="nested-list-subheader">
          //     Nested List Items
          //   </ListSubheader>
          // }
        >
          <ListItemButton onClick={handleAuctionClick} sx={{ borderTop:'1px solid #c2c1c1 ', bgcolor: 'background.paper' }}>
            <ListItemIcon>
              <GavelRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="AUCTIONS" />
            {openAuction ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openAuction} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <SelectedAuctionComponent handleSelectedAuction={handleSelectedAuction} selectedAuction={selectedAuction} />
            </List>
          </Collapse>

          <ListItemButton onClick={handleRangeClick}>
            <ListItemIcon>
              <InsertInvitationRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="RANGE" />
            {openRange ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openRange} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SelectedRangeComponent handleSelectedRange={handleSelectedRange} selectedRange={selectedRange}/>
            </List>
          </Collapse>

          <ListItemButton onClick={handleStatusClick} sx={{ borderTop:'1px solid #c2c1c1 ', bgcolor: 'background.paper' }}>
            <ListItemIcon>
              <FormatListBulletedRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="STATUS" />
            {openStatus ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openStatus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SelectedStatusComponent handleSelectedStatus={handleSelectedStatus} selectedStatus={selectedStatus} /> 
              <SwitchButton handleHideChange={handleCheckedHide} handleGroupChange={handleGroupHide}  hide_checked={hideChecked} group_checked={groupChecked} />
            </List>
          </Collapse>
        </List>
      </div>
    )
  }

  return (
    <React.Fragment>
    <div className='my_auction_element_summary_panel'>
      <SummeryPanel/>
    </div>
    <div className='my_auction_element_content_panel'>
        <div className='my_auction_element_content_panel_fliter_section'>
           <RefreshButton/>
           {returnFilterPart()}
        </div>
        <div className='my_auction_element_content_panel_show_section'>

        </div>
    </div>
    </React.Fragment>
  );
}

export default PastWatchList;