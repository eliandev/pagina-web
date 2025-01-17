import React, { useState, useEffect } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const categoryParam = params.get("category");
    if (categoryParam) {
      setTempCategories((prev) => [...prev, categoryParam]);
    }
  }, []);

  const handleTempGenderChange = (e) => {
    console.log(e.target.value);
    setTempGender(e.target.value);
  };

  const handleTempCategoryChange = (e) => {
    console.log(e.target.value);
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
    setSelectedGender(tempGender); // Actualiza los valores principales
    setSelectedCategories(tempCategories);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Solo se muestra el botón de filtros en dispositivos móviles */}
      <button
        className="filters__open-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Filtros
      </button>

      <div
        className={`filters-modal ${isModalOpen ? "filters-modal--open" : ""}`}
      >
        <div className="filters-modal__content">
          <button
            className="filters-modal__close-btn"
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </button>
          <h2 className="filters__main-label">Filtros</h2>

          {/* Gender Filters */}
          <label htmlFor="gender">Género:</label>
          <ul className="list">
            {genders.map((gender) => (
              <li key={gender.name}>
                <input
                  type="radio"
                  id={`mb-${gender.name}`}
                  name="gender"
                  value={gender.name}
                  checked={tempGender === gender.name}
                  onChange={handleTempGenderChange}
                  className={tempGender === gender.name ? "selected" : ""}
                />
                <label htmlFor={`mb-${gender.name}`}>{gender.name}</label>
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
        </div>
      </div>

      {/* Filtros para Desktop */}
      <div className="filters-desktop">
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
                checked={tempGender === gender.name} // Cambié aquí para usar tempGender
                onChange={handleTempGenderChange}
                className={tempGender === gender.name ? "selected" : ""}
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
                checked={tempCategories.includes(category.name)} // Cambié aquí para usar tempCategories
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
      </div>
    </>
  );
};
