import { contants } from "../Contants/contants";
import HttpService from "./httpService";

export default class OrderService {
  static async addOrder(data) {
    let { data: responseData } = await HttpService.post(
      `${contants.apiEndPoint}/order`,
      data
    );

    return responseData.data._id;
  }

  static async get(id) {
    let { data: responseData } = await HttpService.get(
      `${contants.apiEndPoint}/order/${id}`
    );
    if (!responseData) {
      throw new Error("Something went wrong");
    }
    return responseData.data;
  }
}
