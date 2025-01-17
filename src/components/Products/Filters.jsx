import React, { useState } from "react";
import { genders, categories } from "@data/catalog-config";
import "@styles/components/filters.css";
import "@styles/components/btns.css";

export const Filters = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const totalProducts = 100;
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleReset = () => {
    setSelectedGender("");
    setSelectedCategories([]);
    setFilteredCount(totalProducts); // Reset filtered count
  };

  const handleFilter = () => {
    // Implement your filter logic here
    // Update `filteredCount` based on selected filters
    console.log("Filters applied:", {
      selectedGender,
      selectedCategories,
    });
    // Simulated filter count
    setFilteredCount(Math.max(10, Math.random() * totalProducts));
  };

  return (
    <article className="filters">
      <h2 className="filters__main-label">Filtros</h2>

      {/* Gender Filters */}
      <label htmlFor="gender">Género:</label>
      <ul className="list">
        {genders.map((gender) => (
          <li key={gender.name}>
            <input
              type="radio"
              id={gender.name}
              name="gender"
              value={gender.name}
              checked={selectedGender === gender.name}
              onChange={handleGenderChange}
            />
            <label htmlFor={gender.name}>{gender.name}</label>
          </li>
        ))}
      </ul>

      {/* Category Filters */}
      <label htmlFor="category">Categoría:</label>
      <ul className="list">
        {categories.map((category) => (
          <li key={category.name}>
            <input
              type="checkbox"
              id={category.name}
              name="category"
              value={category.name}
              checked={selectedCategories.includes(category.name)}
              onChange={handleCategoryChange}
            />
            <label htmlFor={category.name}>{category.name}</label>
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="filters-actions">
        <button className="btn" type="button" onClick={handleFilter}>
          Filtrar
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleReset}
        >
          Limpiar
        </button>
      </div>
    </article>
  );
};
