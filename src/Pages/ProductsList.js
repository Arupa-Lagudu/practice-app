import React, {useEffect, useState} from 'react';
import ApiServices from "./services";
import ProdList from './ProdList';
import { Container } from 'react-bootstrap';
import SearchBar from './SearchBar';
import Fuse from "fuse.js";

const ProductsList = () => {
  const [data, setData] = useState();
  const [appState, setAppState] = useState({
    loading: false,
    prods: null,
  });

  useEffect(() => {
    const ProductList = async () => {
      setAppState.loading = true;
      let result = await ApiServices.getdata();
      setAppState({ loading: false, prods: result.data });
      setData(result.data.products);
    };
    ProductList();

}, []);

const searchData = (pattern) => {
  const fuse = new Fuse(appState.prods.products, {
    keys: ["title", "brand", "category", "price"]
  });
  if (!pattern) {
    setData(appState.prods.products);
    return;
  }
  const result = fuse.search(pattern);
  const matches = [];
  if (!result.length) {
    setData([]);
  } else {
  result.forEach(({item}) => {
    matches.push(item);
  });
  setData(matches);
  console.log(matches);
  }
}


  return(
    <Container className='mt-5'>
      <SearchBar 
        placeholder="Search.."
        onChange={(e) => searchData(e.target.value)}/>
      <ProdList prods={data} />
    </Container>
  );
};

export default ProductsList;
