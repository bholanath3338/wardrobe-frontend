import { Link } from "react-router-dom";
import ProductService from "../../Services/productService";

export default function ProductTile({ product }) {
  let prices = ProductService.getPrices(product);
  return (
    product && (
      <div className="product-tile width-2-3">
        <Link to={`/product/${product._id}`}>
          <div className="image-container">
            <img
              src={ProductService.getImagePath(product)[0]}
              alt={product.productName}
            />
          </div>
          <div className="product-data">
            <p className="product-brand font-weight-bold">
              {product.productBrandId.brandName}
            </p>
            <p className="product-name">{product.productName}</p>
            <div className="product-addition-info">
              <p className="product-size">
                Size: {product.productSize.join(", ")}
              </p>
            </div>
            <div className="price">
              {prices.isDiscount && <del>$ {prices.mrp}</del>}

              <ins>$ {prices.price}</ins>
            </div>
          </div>
        </Link>
      </div>
    )
  );
}
