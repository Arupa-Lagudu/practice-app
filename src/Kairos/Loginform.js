import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { blue } from '@mui/material/colors';

const Loginform=()=>{

    const paperStyle={padding :20,height:'70vh',width:350, margin:"20px auto"}
    const FieldStyle={marginTop: 2}
    const btnstyle={margin:'15px 0', marginTop: 40}
    return(
        <Grid>
            <Paper elevation={5} style={paperStyle}>
                <Grid align='center'>
                     <Avatar sx={{ bgcolor: blue[600], margin: 2 }}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField sx={FieldStyle} label='Username' placeholder='Enter username' variant="outlined" fullWidth required/>
                <TextField sx={FieldStyle} label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Loginform;