import { useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductListPage({ productsData }) {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [product, setProduct] = useState([]);


  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {productsData?.map(product => (
        <div  key={product.id}> 
      <Link to={`/product/details/${product.id}`}>
        <li>
          <p>{product.title}</p>
          <img src={product.image} className="imgListing"/>
        </li>
      </Link>
        </div>
      )
      )}
    </div>
  
  )
}

export default ProductListPage;
