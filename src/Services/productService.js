import { contants } from "../Contants/contants";
import HttpService from "./httpService";

export default class ProductService {
  static async getProducts(params) {
    let { data: responseData } = await HttpService.get(
      contants.apiEndPoint + "/product",
      { params }
    );
    return responseData.data;
  }

  static async get(id) {
    let { data: responseData } = await HttpService.get(
      `${contants.apiEndPoint}/product/${id}`
    );
    if (!responseData) {
      throw new Error("Something went wrong");
    }
    return responseData.data;
  }

  static getImagePath(product) {
    return product.productImage.map(
      (image) => `${contants.apiEndPoint}/${image}`
    );
  }
  static getPrices(product) {
    let prices = {
      isDiscount: false,
      mrp: product.productPrice.toFixed(2),
      price: product.productPrice.toFixed(2),
    };

    if (
      product.productDiscountType === 2 ||
      product.productDiscountValue <= 0
    ) {
      return prices;
    }

    prices.isDiscount = true;

    if (product.productDiscountType === 0) {
      prices.price = Math.max(
        0,
        product.productPrice - product.productDiscountValue
      ).toFixed(2);
    } else {
      prices.price = (
        (product.productPrice * (100 - product.productDiscountValue)) /
        100
      ).toFixed(2);
    }
    return prices;
  }
}
