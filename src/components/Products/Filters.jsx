import React, { useState } from "react";
import { genders, categories } from "@data/catalog-config";
import "@styles/components/filters.css";
import "@styles/components/btns.css";

export const Filters = ({
  selectedGender,
  setSelectedGender,
  selectedCategories,
  setSelectedCategories,
}) => {
  const [tempGender, setTempGender] = useState(selectedGender);
  const [tempCategories, setTempCategories] = useState(selectedCategories);

  const handleTempGenderChange = (e) => {
    setTempGender(e.target.value);
  };

  const handleTempCategoryChange = (e) => {
    const category = e.target.value;
    setTempCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleReset = () => {
    setTempGender("");
    setTempCategories([]);
  };

  const handleFilter = () => {
    setSelectedGender(tempGender);
    setSelectedCategories(tempCategories);
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
              checked={tempGender === gender.name}
              onChange={handleTempGenderChange}
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
              checked={tempCategories.includes(category.name)}
              onChange={handleTempCategoryChange}
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
