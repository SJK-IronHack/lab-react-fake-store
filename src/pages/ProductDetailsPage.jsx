import { useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage({data}) {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  let {productId} = useParams()



  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:


let profilePage = data.find((item) => item.id == productId);
  return (
    <div className="ProductDetailsPage">
It works     </div>
  );
}

export default ProductDetailsPage;
