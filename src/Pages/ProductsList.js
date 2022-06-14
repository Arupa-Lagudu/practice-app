import React, {useEffect, useState} from 'react';
import ApiServices from "./services";
import withListLoading from './withListLoading';
import ProdList from './ProdList';

const ProductsList = () => {
  const ListLoading = withListLoading(ProdList);
  const [appState, setAppState] = useState({
    loading: true,
    prods: null,
  });

  useEffect(() => {
    const ProductList = async () => {
      setAppState.loading = true;
      let result = await ApiServices.getdata();
      setAppState({ loading: false, prods: result.data });
    };
    ProductList();
       
  }, []);

  console.dir(appState.loading);
  return(
    <ListLoading Loading={appState.loading} prods={appState.prods} />
  );
};

export default ProductsList;
