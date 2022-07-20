import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Kairos/NavBar";
import DashBoard from "./Kairos/DashBoard";
import { createTheme, ThemeProvider } from '@mui/material';
import TestHub from "./Kairos/TestHub";

function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
    }
  })
  // const Testhub="Test Hub"
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route  path="/"element={<DashBoard />} />
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path="/Test%20Hub" element={<TestHub />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;
