import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import "./styles.css";


const ProductList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      setIsLoading(true);
  
      async function getProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
  
        if (products && products.length > 0) {
          setProducts(products);
          setIsLoading(false);
        }
      }
      getProducts();
    }, []);


     return (
    <div className="Products-wrapper">
      {isLoading ? (
        <div className="Loading">Fetching data ! Please wait </div>
      ) : (
        products.map((product, index) => (
          <ProductCard product={product} key={`${index}${product.id}`} />
        ))
      )}
    </div>
  );
};

export default ProductList;