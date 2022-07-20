import React, { useContext } from "react";
import { CartContext } from "../../Context";
//import ProductCard from "../Components/ProductCard";
import "./styles.css";
const ProductCard = (props) => {
    const { addToCart } = useContext(CartContext)
    const { product } = props;
    const { categery, id, price, title, rating, image } = product;
    return (
        <div className="ProductCard-wrapper">
            <img className="ProductCard-image" src={image} alt="Product Image" />
            <p className="ProductCard-categery">{categery}</p>
            <p className="ProductCard-title">{title}</p>
            <p className="ProductCard-price">{price}</p>
            <p className="ProductCard-rating">{rating.rate}</p>
            <button onClick={() => addToCart(product)} className="ProductCard-button">Add to cart</button>
        </div>
    )
};
export default ProductCard;