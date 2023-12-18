import { useState } from "react";
import { Link, useParams } from "react-router-dom";


function ProductListPage({ productsData }) {
  const [product, setProduct] = useState([]);
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
