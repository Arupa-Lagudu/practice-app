import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Kairos/NavBar";
import DashBoard from "./Kairos/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route  path="/"element={<DashBoard/>} >
        <Route path="" element />
      </Route> 
      </Routes>
    </BrowserRouter>
  );
}


export default App;
