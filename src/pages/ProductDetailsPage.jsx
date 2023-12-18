import { useParams } from "react-router-dom";

function ProductDetailsPage({ productsData }) {

  const { productId } = useParams();
  const productCard = productsData.find((item) => item.id == productId);


  return (
    <div className="ProductDetailsPage">
      <img src={productCard.image} height={150} width={80} />
      <p>${productCard.price}</p>
    </div>
  );
}

export default ProductDetailsPage;