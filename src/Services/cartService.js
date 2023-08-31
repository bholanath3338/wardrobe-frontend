import { contants } from "../Contants/contants";
import HttpService from "./httpService";
import ProductService from "./productService";

export default class CartService {
  static async addProduct(data) {
    let addedQty = await CartService.getAddedQty(data);
    console.log("CartService.getAddedQty(data)", addedQty);
    if (addedQty) {
      data.quantity += addedQty.quantity;
      await CartService.updateCart(data, addedQty.id);
    } else {
      await HttpService.post(`${contants.apiEndPoint}/cart`, data);
    }
  }

  static async updateCart(data, id) {
    await HttpService.put(`${contants.apiEndPoint}/cart/${id}`, data);
  }

  static async deleteCart(id) {
    await HttpService.delete(`${contants.apiEndPoint}/cart/${id}`);
  }

  static async getAddedQty({ productId, productSize }) {
    let addedQty = null;
    let cart = await CartService.get();
    if (!cart.length) {
      return addedQty;
    }

    cart.forEach((element) => {
      if (
        element.productId._id === productId &&
        element.productSize === productSize
      ) {
        addedQty = { quantity: element.quantity, id: element._id };
        return false;
      }
    });

    return addedQty;
  }

  static async getPrices(cartD) {
    let prices = {
      sub: 0.0,
      tax: 0.0,
      total: 0.0,
    };

    let cart = cartD ?? (await CartService.get());
    if (!cart.length) {
      return prices;
    }

    cart.forEach((cartItem) => {
      prices.sub +=
        ProductService.getPrices(cartItem.productId).price * cartItem.quantity;
    });
    prices.tax = (prices.sub * 13) / 100;

    prices.total = prices.sub + prices.tax;
    return {
      sub: prices.sub.toFixed(2),
      tax: prices.tax.toFixed(2),
      total: prices.total.toFixed(2),
    };
  }

  static async get() {
    let { data: responseData } = await HttpService.get(
      `${contants.apiEndPoint}/cart`
    );
    return responseData.data ?? [];
  }
}
