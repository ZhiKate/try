import {useState} from 'react';
import { useNavigate } from 'react-router-dom'; 

import { FormControlLabel,FormControl, InputLabel, Input, Button, FormGroup, FormLabel, Switch,TextField, FormHelperText } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import HttpsIcon from '@mui/icons-material/Https';


export default function EditPassword (){
    const[currentPassword,setCurrentPassword]=useState('');
    const[newPassword,setNewPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[current_error,setCurrent_error]=useState(false);
    const[new_error,setNew_error]=useState(false);
    const[confirm_error,setConfirm_error]=useState(false);

    const navigate = useNavigate(); 
    
    const handleNavigate = (path) => {
        navigate(path);
      };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrent_error(false);
        setNew_error(false);
        setConfirm_error(false);
        // check the current password is not null and is true. And here does not complete.
        if(!(currentPassword)){
            setCurrent_error(true);
            // setCurrentPassword('');
        }
        if(!(newPassword)){
            setNew_error(true);
            // setNewPassword('');
        }
        if(!(confirmPassword)){
            setConfirm_error(true);
            // setConfirmPassword('');
        }
        if((newPassword||confirmPassword)){
            if(newPassword !==confirmPassword){
                setNew_error(true);
                setConfirm_error(true);
                // setNewPassword('');
                // setConfirmPassword('');
            }
        }
    }

    const handleCurrentPasswordChange=(value)=>{
        setCurrentPassword(value)
        setCurrent_error(false);
    }
    const handleNewPasswordChange=(value)=>{
        setNewPassword(value)
        setNew_error(false);
    }
    const handleConfirmPasswordChange=(value)=>{
        setConfirmPassword(value)
        setConfirm_error(false);
    }
  return (
    <div className='edit_password_page'>
        <div>
            <h1> STEP 2: CREATE A NEW PASSWORD</h1>
            <p>
            PASSWORDS MUST BE AT LEAST 8 CHARACTERS AND CAN ONLY CONTAIN NUMBERS, LETTERS, AND ! @ # $ % ^ & * - _ , .
            </p>
        </div>
        <form className='password_edit_form' onSubmit={handleSubmit}>
                <Box mt={2}>
                    <TextField id="currentPassword"
                        label='Current Password *'
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position="start">
                                    <HttpsIcon />
                                </InputAdornment>)
                        }}
                        fullWidth
                        value={currentPassword} onChange={(e)=>handleCurrentPasswordChange(e.target.value)}
                        error={current_error}
                        helperText={current_error ?  "Password can not be empty": ""}
                    />
                </Box>
                <Box mt={2}>
                    <TextField id="newPassword"
                        label='New Password *'
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position="start">
                                    <HttpsIcon />
                                </InputAdornment>)
                        }}
                        fullWidth
                        value={newPassword} onChange={(e)=>handleNewPasswordChange(e.target.value)}
                        error={new_error}
                        helperText={new_error ? (newPassword? "Please ensure both passwords match": "new passoword can not be empty"): ""}
                    />
                </Box>
                <Box mt={2}>
                    <TextField id="confirmPassword"
                        label='Confirm Password *'
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position="start">
                                    <HttpsIcon />
                                </InputAdornment>)
                        }}
                        fullWidth
                        value={confirmPassword} onChange={(e)=>handleConfirmPasswordChange(e.target.value)}
                        error={confirm_error}
                        helperText={confirm_error ? (confirmPassword? "Please ensure both passwords match": "new passoword can not be empty"): ""}
                    />
                </Box>

            <Box mt={2}>
                <Button className='submit_button' variant='contained'  type='submit'
                    sx={{
                        backgroundColor: 'black', 
                        transition: 'background-color 0.3s',
                        '&:hover': {
                        backgroundColor: '#333333',
                        },
                    }}
                >
                    Save New Password
                </Button>
                <Button className='return_button' variant='contained' 
                    sx={{
                        backgroundColor: 'black', 
                        transition: 'background-color 0.3s',
                        '&:hover': {
                        backgroundColor: '#333333',
                        },
                    }}
                    onClick={() => handleNavigate('/AccountInfo')}
                >
                    Return
                </Button>
            </Box>            
        </form>
    </div>
  );
}

