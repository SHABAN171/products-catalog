import React from "react";

const CategoryFilter = ({ category, setCategory, categories }) => {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="category-filter"
    >
      <option value="">All Categories</option>
      {categories.map((cat, index) => (
        <option key={index} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
