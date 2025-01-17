import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      {/* <img src={product.image} alt={product.name} /> */}
      <h2 className="product-card__name">{product.name}</h2>
      <p className="product-card__price">{product.price}</p>
      <button className="product-card__btn">Comprar</button>
    </article>
  );
};
