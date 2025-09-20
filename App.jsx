
// App.js
import React from "react";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="border p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Products List</h1>
      <div className="flex justify-center gap-6">
        <ProductCard name="Wireless Mouse" price={25.99} status="In Stock" />
        <ProductCard name="Keyboard" price={45.5} status="Out of Stock" />
        <ProductCard name="Monitor" price={199.99} status="In Stock" />
      </div>
    </div>
  );
}

export default App;
