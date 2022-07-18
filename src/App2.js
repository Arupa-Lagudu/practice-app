import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Kairos/NavBar";
import DashBoard from "./Kairos/DashBoard";
import { createTheme, ThemeProvider } from '@mui/material';

function App() {

  const theme = createTheme({
    palette: {
      mode: 'light',
    }
  })

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route  path="/"element={<DashBoard/>} >
        <Route path="" element />
      </Route> 
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;
