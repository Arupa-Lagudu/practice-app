import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import DashBoard from "./DashBoard";
import TestHub from "./TestHub";

function App() {

  return (
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route  path="/"element={<DashBoard />} />
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path="/Test%20Hub" element={<TestHub />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
