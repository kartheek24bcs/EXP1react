// src/ProductCard.jsx
import React from "react";

function ProductCard({ name, price, status }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      width: "200px",
      textAlign: "center",
      boxShadow: "2px 2px 6px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ fontWeight: "bold" }}>{name}</h2>
      <p>Price: ${price}</p>
      <p style={{ color: status === "In Stock" ? "green" : "red" }}>
        Status: {status}
      </p>
    </div>
  );
}

export default ProductCard;
