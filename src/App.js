import React, { useState } from "react";
import productsData from "./data/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductModal from "./components/ProductModal";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [...new Set(productsData.map((p) => p.category))];

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? product.category === category : true;
    return matchesSearch && matchesCategory;
  });

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <h1>🛍️ Product Catalog</h1>

      <div className="filters">
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={handleViewDetails}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* Product Details Modal */}
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
