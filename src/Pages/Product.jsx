import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductGrid from "../Components/Product/ProductGrid";
import AuthService from "../Services/authService";
import CartService from "../Services/cartService";
import ProductService from "../Services/productService";

export default function ProductList(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState();
  const [size, setSize] = useState("");

  const handleCountDecrementCick = (event) => {
    event.preventDefault();
    setCount((c) => Math.max(0, c - 1));
  };

  const handleCountIncrementClick = (event) => {
    event.preventDefault();
    setCount((c) => c + 1);
  };

  const handleAddToCartClick = async (event) => {
    event.preventDefault();
    if (count <= 0) return;

    if (!AuthService.isLogedIn()) {
      navigate("/login");
      return;
    }
    await CartService.addProduct({
      productId: id,
      productSize: size,
      quantity: count,
    });
    navigate("/cart");
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  useEffect(() => {
    ProductService.get(id)
      .then((productRes) => {
        setProduct(productRes);
        setSize(productRes.productSize[0]);
      })
      .catch(() => {
        navigate(`/`);
      });
  }, [id, navigate]);

  return (
    <>
      <main className="margintop100">
        {product && (
          <section className="product-detail">
            <div className="container">
              <div className="parent-row main-description justify-content-between">
                <div className="width-5 parent-row product-images">
                  <div className="parent-row">
                    {ProductService.getImagePath(product).map(
                      (img, index) =>
                        index > 0 && (
                          <div className="image-container" key={index}>
                            <img
                              id="main-1"
                              src={img}
                              alt="product"
                              width="100%"
                            />
                          </div>
                        )
                    )}
                  </div>
                </div>
                <div className="description-container width-4-5">
                  <h1 id="product-title">{product.productName}</h1>
                  <h2 id="product-brand" className="seller">
                    {product.productBrandId.brandName}
                  </h2>
                  <div className="rating-container">
                    <div className="rating">
                      <div className="rating-inner">
                        {product.productRating} / 5.0
                        <span className="star">
                          <img
                            src="/assets/img/star.jpg"
                            alt="star"
                            height="17px"
                            width="18px"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="price-section">
                    <p className="pice-inner">
                      <span className="price">
                        <strong id="after-discount-price">
                          ${ProductService.getPrices(product).price}
                        </strong>
                      </span>
                      &nbsp;
                      {ProductService.getPrices(product).isDiscount && (
                        <span id="discount-section">
                          <span className="mrp discount">
                            <del id="mrp">
                              ${ProductService.getPrices(product).mrp}
                            </del>
                          </span>
                        </span>
                      )}
                    </p>
                    <p className="tax">Inclusive of all taxes</p>
                  </div>
                  <div className="parent-row quantity-section">
                    <div>
                      Size:{" "}
                      <select value={size} onChange={handleSizeChange}>
                        {product.productSize.map((val, index) => (
                          <option value={val} key={index}>
                            {val}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="quantity_changer backward">
                      <a
                        href="0"
                        onClick={handleCountDecrementCick}
                        style={{ width: "20px" }}
                      >
                        <img
                          src="/assets/img/backward-svgrepo-com.svg"
                          alt="sub"
                        />
                      </a>
                    </div>
                    <div className="qty">{count}</div>
                    <div className="quantity_changer forward">
                      <a
                        href="0"
                        onClick={handleCountIncrementClick}
                        style={{ width: "20px" }}
                      >
                        <img
                          src="/assets/img/forward-svgrepo-com.svg"
                          alt="sub"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="add-to-cart-section parent-row">
                    <a
                      href="0"
                      className="add-to-cart-btn btn"
                      id="add-to-cart"
                      onClick={handleAddToCartClick}
                    >
                      Add to cart
                    </a>
                  </div>

                  <div className="delivery-options-parent">
                    <h2 className="delivery-options">Delivery options</h2>
                    <ul>
                      <li>Pay on delivery available</li>
                      <li>Credit and debit cards also acceptable</li>
                      <li>
                        Easy {product.productReturnDays} days return and
                        exchange policy
                      </li>
                    </ul>
                  </div>
                  <div className="parent-row justify-content-space-evenly">
                    {Object.entries(product.productMoreDetails[0]).map(
                      (value, index) => (
                        <div
                          className="width-4 product-detail-row f-flex justify-content-between"
                          key={index}
                        >
                          <p className="product-detail-key">{value[0]}</p>
                          <p className="product-detail-value">{value[1]}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              {product.productSimilar.length !== 0 && (
                <div className="similar-products">
                  <h1>SIMILAR PRODUCTS</h1>
                  <ProductGrid
                    params={{ product_ids: product.productSimilar }}
                  />
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
