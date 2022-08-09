import React, { useState, createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import SignIn from "./Kairos/Login/index";
import { Box } from "@mui/material";
import { Snackbar } from "@mui/material";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import DashBoard from "./Kairos/DashBoard";
import NotFound from "./Kairos/NotFound";
import { theme } from "./Kairos/Styles/Styles";
import DashboardLayout from "./Kairos/DashboardLayout/index"
import { Outlet } from "react-router-dom";
import TestHub from "./Kairos/TestHub";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarContext = createContext({});

const PrivateRoute = ({ children }) => {
  const userDetails = JSON.parse(localStorage.getItem("KiTapAuth"));
  return userDetails ? children : <Navigate to="/login" />;
};

const SidebarLayout = () => (
  <>
    <DashboardLayout />
    <Outlet />
  </>
);

function App() {
  // toaster start
  const initialState = {
    message: "",
    color: "",
    open: false,
  };
  const [snack, setSnack] = useState(initialState);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnack(initialState);
  };

  //toaster end

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box>
          <Router>
            {/* toaster for all components*/}
            <SnackbarContext.Provider value={{ snack, setSnack }}>
              {/* toaster */}
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={snack.open}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity={snack.colour}>
                  {snack.message}
                </Alert>
              </Snackbar>
              <>
                <Routes>
                  <Route path="/" element={<SignIn />} />
                </Routes>
              </>
              {/* toaster */}
              <div>
                <Box
                  component="main"
                  sx={{ display: "flex", padding: "48px 24px 24px" }}
                >
                  <Routes>
                      <Route path="/Dashboard" element={<DashBoard />} />
                      <Route path="/TestHub" element={<TestHub />} />
                      <Route path="*" exact={true} element={<NotFound />} />
                  </Routes>
                </Box>
              </div>
            </SnackbarContext.Provider>
            {/* toaster end*/}
          </Router>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
