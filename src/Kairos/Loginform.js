import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { blue } from '@mui/material/colors';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AuthService from "./services/auth.service";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Loginform=()=>{

    const paperStyle={padding :20,height:'70vh',width:350, margin:"20px auto"}
    const FieldStyle={marginTop: 2}
    const btnstyle={margin:'15px 0', marginTop: 40}

    const navigate = useNavigate();
    const userDetails = JSON.parse(localStorage.getItem("KiTapAuth"));
    if (userDetails) {
      navigate("/");
    }
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [notification, setNotification] = useState(false);
    const [msg, setMsg] = useState("");
    const [aType, setAType] = useState("info");
    const handleCloseNotification = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setNotification(false);
    };
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const onSubmitTestCreate = (data) => {
      AuthService.login(data.email, data.password).then(
        (response) => {
          navigate("/");
          console.log(response);
        },
        (error) => {
          setNotification(true);
          setMsg("Invalid Credentials");
          setAType("error");
        }
      );
    }

    return(
      <>
        <Grid>
            <Paper elevation={5} style={paperStyle}>
                <Grid align='center'>
                     <Avatar sx={{ bgcolor: blue[600], margin: 2 }}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField sx={FieldStyle} 
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                size="small"
                autoFocus
                error={errors.email ? true : false}
                {...register("email", { required: true })}
                />

                <TextField sx={FieldStyle} 
                required
                fullWidth
                margin="normal"
                label="Password"
                variant="outlined"
                size="small"
                error={errors.password ? true : false}
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                />

                <Button style={btnstyle} 
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit(onSubmitTestCreate)}
                >Sign in</Button>
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
        <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={notification}
          autoHideDuration={2000}
          onClose={handleCloseNotification}
        >
          <Alert
            onClose={handleCloseNotification}
            severity={aType}
            sx={{ width: "100%" }}
          >
            {msg}
          </Alert>
        </Snackbar>
      </Stack>
    </>
    )
}

export default Loginform;