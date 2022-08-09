import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Messages from "./Pages/Messages";
import NoPage from "./Pages/NoPage";
import ProductDetails from "./Pages/ProductDetails";
import ProductsList from "./Pages/ProductsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route  path="/"element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/Products" element={<ProductsList />} />
            <Route path="/Products/:id" element={<ProductDetails/>}/>
            <Route path="*" element={<NoPage />} />
          </Route> 
      </Routes>
    </BrowserRouter>
  );
}


export default App;
