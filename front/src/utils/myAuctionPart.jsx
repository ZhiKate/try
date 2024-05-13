import Button from '@mui/material/Button';
import CachedIcon from '@mui/icons-material/Cached';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import { InputLabel, Select, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';



export function RefreshButton() {

    return (
        <Button className='refresh_button' variant='contained' 
            sx={{
                backgroundColor: 'black', 
                transition: 'background-color 0.3s',
                '&:hover': {
                backgroundColor: '#333333',
                },
            }}
        >
            <CachedIcon style={{ marginRight: '5px' }}/>Refresh
        </Button>
    );
  
}

export function SwitchButton(props) {

    const {handleHideChange,handleGroupChange,hide_checked,group_checked}=props;
    const handleClick_Hide =()=>{
        handleHideChange();
    }  
    const handleClick_Group =()=>{
        handleGroupChange();
    }
    return (
        <div>
            <FormControlLabel control={<Switch checked={hide_checked} onChange={handleClick_Hide}/>} label="Hide Closed Lots" />
            <FormControlLabel  control={<Switch checked={group_checked} onChange={handleClick_Group}/>} label="Group By Auction" />
        </div>
    );
  
}

export function SelectedAuctionComponent(props) {

    const {handleSelectedAuction,selectedAuction}=props;
    const handleChooseAuction =(e)=>{
        handleSelectedAuction(e);
    }
    return (
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        sx={{ width: '100%',bgcolor: 'background.paper' ,margin:'15px 0px'}}
        value={selectedAuction}
        onChange={(e)=>handleChooseAuction(e)}
      >
        <MenuItem value="AllAuctions">All Auctions</MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    );
  
}


export function SelectedStatusComponent(props) {

    const {handleSelectedStatus,selectedStatus}=props;
    const handleChooseStatus =(e)=>{
        handleSelectedStatus(e);
    }
    return(
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={selectedStatus}
            onChange={(e)=>handleChooseStatus(e)}
          >
            <FormControlLabel value="ALL" control={<Radio />} label="ALL" />
            <FormControlLabel value="Only Watching" control={<Radio />} label="Only Watching" />
            <FormControlLabel value="Winning" control={<Radio />} label="Winning" />
            <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
            <FormControlLabel value="Outbid" control={<Radio />} label="Outbid" />
          </RadioGroup>
        </FormControl>
      )
  
}

export function SelectedRangeComponent(props) {

    const {handleSelectedRange,selectedRange}=props;
    const handleChooseRange =(e)=>{
        handleSelectedRange(e);
    }
    return(
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={selectedRange}
            onChange={(e)=>handleChooseRange(e)}
          >
            <FormControlLabel value="Past 3 Month" control={<Radio />} label="Past 3 Month" />
            <FormControlLabel value="Past 6 Month" control={<Radio />} label="Past 6 Month" />
            <FormControlLabel value="Past 12 Month" control={<Radio />} label="Past 12 Month" />
          </RadioGroup>
        </FormControl>
      )
  
}
