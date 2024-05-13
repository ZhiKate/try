import React,{useState} from 'react';
import { FormControlLabel,FormControl, InputLabel, Input, Button, FormGroup, FormLabel, Switch,TextField, FormHelperText } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import BusinessIcon from '@mui/icons-material/Business';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaxIcon from '@mui/icons-material/Fax';
import EmailIcon from '@mui/icons-material/Email';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

function Profile() {
    const[company,setCompany]=useState('');
    const[lastName,setLastName]=useState('');
    const[firstName,setFirstName]=useState('');
    const[country,setCountry]=useState('');
    const[address,setAddress]=useState('');
    const[city,setCity]=useState('');
    const[province,setProvince]=useState('');
    const[postalCode,setPostalCode]=useState('');
    const[phone1,setPhone1]=useState('');
    const[phone2,setPhone2]=useState('');
    const[fax,setFax]=useState('');
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[confirmEmail,setConfirmEmail]=useState('');
    const[hideUsername,setHideUsername]=useState(false);
    const[allowMagnifying,setAllowMagnifying]=useState(true);
    const[removeClosedLots,setRemoveClosedLots]=useState(false);
    const[first_error,setFirst_Error]=useState(false);
    const[last_error,setLast_Error]=useState(false);
    const[username_error,setUsername_Error]=useState(false);
    const[email_Error,setEmail_Error]=useState(false);
    const[confirmEmail_Error,setConfirmEmail_Error]=useState(false);
    
    const navigate = useNavigate(); 


  const handleSubmit = (e) => {
    e.preventDefault();
    resetAllInputStatus();
    if(!(firstName)){
        setFirst_Error(true);
    }
    if(!(lastName)){
        setLast_Error(true);
    }
    //  check the username is not null and is not used by others. And here does not complete.
    if(!(username)){
        setUsername_Error(true);
    }
    if(!(email)){
        setEmail_Error(true);
    }
    if(!(confirmEmail)){
        setConfirmEmail_Error(true);
    }
    if((email||confirmEmail)){
        if(email !==confirmEmail){
            setEmail_Error(true);
            setConfirmEmail_Error(true);
        }
    }
  };

  const resetAllInputStatus=()=>{
    setFirst_Error(false);
    setLast_Error(false);
    setUsername_Error(false);
    setEmail_Error(false);
    setConfirmEmail_Error(false);
  }
  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFirst_Error(false);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setLast_Error(false);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
  };
  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };
  const handlePhone1Change = (e) => {
    setPhone1(e.target.value);
  };
  const handlePhone2Change = (e) => {
    setPhone2(e.target.value);
  };
  const handleFaxChange = (e) => {
    setFax(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsername_Error(false);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmail_Error(false);
  };
  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
    setConfirmEmail_Error(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <form className='profile_edit_form' onSubmit={handleSubmit}>
      <div>
      <Box mb={2}>
        <h2>EDIT PERSONAL INFO</h2>
      </Box>
        {/* <Box mb={2}>
            <FormControl fullWidth>
            <InputLabel htmlFor="company">Your Company:</InputLabel>
            <Input id="company"
                startAdornment={
                <InputAdornment position="start">
                    <BusinessIcon />
                </InputAdornment>}
                value={company} onChange={handleCompanyChange}
            />
            </FormControl>
        </Box> */}
        <Box mb={2}>
            <TextField id="company"
                label='Your Company'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <BusinessIcon />
                        </InputAdornment>)
                }}
                fullWidth
                value={company} onChange={handleCompanyChange}
            />
        </Box>


        <Box mb={2}>
            <TextField id="firstName"
                label='First Name: *'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <PersonIcon />
                        </InputAdornment>)
                }}
                fullWidth
                value={firstName} onChange={handleFirstNameChange}
                error={first_error}
                helperText={first_error ? "First name can not be empty" : ""}
            />
        </Box>

        <Box mb={2}>
            <TextField id="lastName"
                label='Last Name: *'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <PersonIcon />
                        </InputAdornment>)
                }}
                fullWidth
                value={lastName} onChange={handleLastNameChange}
                error={last_error}
                helperText={last_error ? "First name can not be empty" : ""}
            />
        </Box>


        <Box mb={2}>
            <TextField id="country"
                label='Country'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <PublicIcon />
                        </InputAdornment>)
                }}
                fullWidth
                value={country} onChange={handleCountryChange}
            />
        </Box>

        <Box mb={2}>
            <TextField id="address"
                label='Address'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <HomeIcon />
                        </InputAdornment>)
                }}
                fullWidth
                value={address} onChange={handleAddressChange}
            />
        </Box>
        
        <Box mb={2}>
            <TextField id="city"
                label='City'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <HomeIcon />
                        </InputAdornment>)
                }}
                fullWidth
                value={city} onChange={handleCityChange}
            />
        </Box>

        <Box mb={2}>
            <TextField id="province"
                label='Province'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <HomeIcon />
                        </InputAdornment>)
                }}
                fullWidth
                value={province} onChange={handleProvinceChange}
            />
        </Box>
        <Box mb={2}>
            <TextField id="postalCode"
                label='Postal Code'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <HomeIcon />
                        </InputAdornment>)
                }}
                fullWidth
                value={province} onChange={handlePostalCodeChange}
            />
        </Box>

        <Box mb={2}>
            <TextField id="phone1"
                label='Phone Number 1'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <LocalPhoneIcon />
                        </InputAdornment>)
                }}
                fullWidth
                value={phone1} onChange={handlePhone1Change}
            />
        </Box>

        <Box mb={2}>
            <TextField id="phone2"
                label='Phone Number 2'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <LocalPhoneIcon />
                        </InputAdornment>)
                }}
                fullWidth
                value={phone2} onChange={handlePhone2Change}
            />
        </Box>

        <Box mb={2}>
            <TextField id="fax"
                label='Fax'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <FaxIcon />
                        </InputAdornment>)
                }}
                fullWidth
                value={fax} onChange={handleFaxChange}
            />
        </Box>

      </div>

      <div>
        <Box mb={2}>
            <h2>EDIT USER ID OR EMAIL ADDRESS</h2>
        </Box>

        <Box mb={2}>
            <TextField id="username"
                label='Username *'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <AccountCircleIcon />
                        </InputAdornment>)
                }}
                fullWidth
                value={username} onChange={handleUsernameChange}
                error={username_error}
                helperText={username_error ? (username ? "username had existed":"Username can not be empty") : ""}
            />
        </Box>

        <Box mb={2}>
            <a onClick={() => handleNavigate('/edit_password')}>Click here to Change Your Password</a>
        </Box>

        <Box mb={2}>
            <TextField id="email"
                label='Email *'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>)
                }}
                fullWidth
                value={email} onChange={handleEmailChange}
                error={email_Error}
                helperText={email_Error ? (email? "Please ensure both emails match": "Email can not be empty"): ""}
            />
        </Box>

        <Box mb={2}>
            <TextField id="confirmEmail"
                label='Confirm Email *'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>)
                }}
                fullWidth
                value={confirmEmail} onChange={handleConfirmEmailChange}
                error={confirmEmail_Error}
                helperText={email_Error ? (email? "Please ensure both emails match": "Email can not be empty"): ""}
            />
        </Box>
      </div>

      <div>
        <h2>EDIT ACCOUNT OPTIONS</h2>
        <FormGroup>
          <FormControlLabel
            control={<Switch />}
            label="Hide Username From Public"
          />
          <FormControlLabel
            control={<Switch />}
            label="Allow Magnifying Glass For Catalog Thumbnails"
          />
          <FormControlLabel
            control={<Switch />}
            label="Automatically Remove Closed Lots"
          />
        </FormGroup>
      </div>

      <Box mb={2}>
            <a onClick={() => handleNavigate('/AccountInfo')}>Manage Searches & Email</a>
        </Box>

      {/* <Button variant="contained" color="primary" type="submit">
        Save Account Info
      </Button> */}

      <Button className='submit_button' variant='contained'  type='submit'
            sx={{
                backgroundColor: 'black', 
                transition: 'background-color 0.3s',
                '&:hover': {
                backgroundColor: '#333333',
                },
            }}
        >
            Save Account Info
        </Button>
    </form>
  );
}

export default Profile;