import React from "react";
import "@styles/components/productList.css";

import { Filters } from "./Filters";
import { ProductCard } from "./ProductCard";

import data from "@data/data";

export const ProductList = () => {
  return (
    <section className="product-list">
      <Filters />

      {/* Product cards */}
      <div className="product-list__wrapper">
        {data.products.map((product, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </div>
    </section>
  );
};
