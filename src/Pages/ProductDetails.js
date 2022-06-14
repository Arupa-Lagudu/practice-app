import { useEffect, useState } from "react";
import withListLoading from './withListLoading';
import { useParams } from "react-router-dom";
import ApiServices from "./services";
import Product from "./Product";

const ProductDetails = () => {
  const productCode = useParams();
  const ListLoading = withListLoading(Product);
const [appState, setAppState] = useState({
  loading: false,
  prod: null,
});

  useEffect(() => {
    const ProductDetails = async () => {
      setAppState.loading = true;
      let result = await ApiServices.getdata(productCode.id );
      setAppState({ loading: false, prod: result.data });
    };
    ProductDetails();
  }, [productCode.id]);
  console.dir(appState.prod);

  return (
    <ListLoading Loading={appState.loading} prod={appState.prod} />
  );
};

export default ProductDetails;
