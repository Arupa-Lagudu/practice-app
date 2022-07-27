import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import DashBoard from "./DashBoard";
import TestHub from "./TestHub";
import ImageDiff from "./ImageDiff";


function App() {

  return (
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route  path="/"element={<DashBoard />} />
        <Route path="/Dashboard" element={<DashBoard />} />
        <Route path="/Test%20Hub" element={<TestHub />} />
        <Route path="/Scheduled" element={<ImageDiff />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
