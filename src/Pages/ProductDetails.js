import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiServices from "./services";
import Product from "./Product";

const ProductDetails = () => {
  const productCode = useParams();
const [prod, setprod] = useState(null);

  useEffect(() => {
    const ProductDetails = async () => {
      let result = await ApiServices.getdata(productCode.id );
      setprod(result.data);
    };
    ProductDetails();
  }, [productCode.id]);
  console.dir(prod);

  return (
    <Product prod={prod}/>
  );
};

export default ProductDetails;
