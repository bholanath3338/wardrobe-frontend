import CartService from "../Services/cartService";
import ProductService from "../Services/productService";

export default function CartItem({ cartItem, setCart }) {
  if (!cartItem) {
    return;
  }
  const handleDeleteClick = async (event) => {
    event.preventDefault();

    await CartService.deleteCart(cartItem._id);
    setCart(await CartService.get());
  };

  return (
    <>
      <tr className="cart-row">
        <td valign="middle" className="max-w100">
          <div className="product_img">
            <img
              width="100%"
              src={ProductService.getImagePath(cartItem.productId)[0]}
              className="img-fluid"
              alt="cart img"
            />
          </div>
        </td>
        <td valign="middle">
          <h1 className="product_name">{cartItem.productId.productName}</h1>
        </td>
        <td valign="middle">
          <h1 className="price_money">{cartItem.productSize}</h1>
        </td>
        <td valign="middle">
          <div className="price_money">
            {ProductService.getPrices(cartItem.productId).price}
          </div>
        </td>
        <td valign="middle">
          <div className="qty">{cartItem.quantity}</div>
        </td>
        <td valign="middle">
          <div className="total-price_money">
            ${" "}
            {(
              ProductService.getPrices(cartItem.productId).price *
              cartItem.quantity
            ).toFixed(2)}
          </div>
        </td>
        <td valign="middle">
          <div className="quantity_changer">
            <a
              href="void"
              onClick={handleDeleteClick}
              style={{ width: "20px" }}
            >
              <img src="assets/img/close.svg" alt="close" />
            </a>
          </div>
        </td>
      </tr>
    </>
  );
}
