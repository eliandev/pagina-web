import React, { useState, useEffect } from "react";
import { Filters } from "./Filters";
import { ProductCard } from "./ProductCard";
import data from "@data/data.js";
import "@styles/components/productList.css";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const categoryParam = params.get("category");
    if (categoryParam) {
      setSelectedCategories((prev) => [...prev, categoryParam]);
    }

    console.log(categoryParam);
  }, []);

  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products);
    }
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesGender = selectedGender
      ? product.gender === selectedGender
      : true;

    const matchesCategory =
      selectedCategories.length > 0
        ? selectedCategories.includes(product.category)
        : true;

    return matchesGender && matchesCategory;
  });

  return (
    <section className="product-list">
      <Filters
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />

      <div className="product-list__wrapper">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))
        ) : (
          <p className="not-found">
            <b>No se encontraron productos</b> para los filtros seleccionados.
          </p>
        )}
      </div>
    </section>
  );
};
