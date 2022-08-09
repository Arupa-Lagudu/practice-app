import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import DashBoard from "./DashBoard";
import TestHub from "./TestHub";
import ImageDiff from "./ImageDiff";
import Login from "./Login";
import NotFound from "./NotFound";

const PrivateRoute = ({ children }) => {
  const userDetails = JSON.parse(localStorage.getItem("KiTapAuth"));
  return userDetails ? children : <Navigate to="/login" />;
};

const SidebarLayout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

function App() {

  return (
    <BrowserRouter>
      <Routes>
      
        <Route  path="/" element={<PrivateRoute children={<SidebarLayout />} />}>
      
        <Route path="/" element={
         <PrivateRoute children={<DashBoard />} />} />

        <Route path="/Dashboard" element={
          <PrivateRoute children={<DashBoard />} />} />

        <Route path="/Test%20Hub" element={
          <PrivateRoute children={<TestHub />} />} />

        <Route path="/Scheduled" element={
          <PrivateRoute children={<ImageDiff />} />} />

        <Route path="/Connections" element={<NotFound />} />

        <Route path="/Files" element={<NotFound />} />

        <Route path="/Validations" element={<NotFound />} />

        <Route path="/Files" element={<NotFound />} />

        <Route path="/preference" element={<NotFound />} />

        <Route path="/Guides" element={<NotFound />} />

      </Route>

    </Routes>

    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
}


export default App;
