import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";


function App() {
  const [products, setProducts] = useState([])
  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (response.ok) {
      const productsData = await response.json();
      setProducts(productsData);
      console.log(productsData);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage productsData={products} />} />
        <Route path="/product/details/:productId" element={<ProductDetailsPage productsData={products}/>} />
      </Routes>

    </div>
  );
}

export default App;
