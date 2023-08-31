import { useEffect, useState } from "react";
import ProductService from "../../Services/productService";
import ProductTile from "./ProductTile";

export default function ProductGrid({ params }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts(params)
      .then((products) => setProducts(products))
      .catch(() => {
        setProducts([]);
      });
  }, [params]);

  return (
    <div className="parent-row product-grid">
      {products.map((product, index) => (
        <ProductTile product={product} key={index} />
      ))}
    </div>
  );
}
