import React from "react";
import "@styles/components/productCard.css";

export const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <img
        className="product-card__img"
        src={`./shoes/${product.image}`}
        alt={product.name}
      />
      <h2 className="product-card__name">{product.name}</h2>
      <p className="product-card__price">{`$ ${product.price}`}</p>
      <button className="product-card__btn">Comprar</button>
    </article>
  );
};
