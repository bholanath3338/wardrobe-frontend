import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import { useNavigate } from "react-router-dom";
import OrderService from "../Services/orderService";
import AuthService from "../Services/authService";
import CartService from "../Services/cartService";

export default function Checkout() {
  const [inputs, setInputs] = useState({});
  const [payment, setPayment] = useState("card");
  const navigate = useNavigate();

  useEffect(() => {
    if (!AuthService.isLogedIn()) {
      navigate("/login");
      return;
    }
    CartService.get().then((cartResponse) => {
      if (cartResponse.length === 0) {
        navigate("/");
      }
    });
  }, [navigate]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onChangePayment = (event) => {
    setPayment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let orderId = await OrderService.addOrder(inputs);
    navigate(`/thankyou/${orderId}`);
  };

  return (
    <>
      <Banner image="/assets/img/checkout-banner.png">
        <h1>Checkout</h1>
      </Banner>
      <main className="margintop100">
        <section className="checkout-form" id="checkout-form">
          <div className="container inner">
            <div className="checkout-inner">
              <div className="parent-row">
                <div className="checkout-left-section width-6">
                  <form
                    className="checkout-detail-form"
                    onSubmit={handleSubmit}
                  >
                    <h6>Checkout details</h6>
                    <div className="parent-row justify-content-between form-div">
                      <div className="width-4-9">
                        <label>First Name</label>
                        <span className="astrik">&#42;</span>
                        <input
                          type="text"
                          className="input-form"
                          name="firstName"
                          placeholder="First name"
                          required
                          value={inputs.firstName || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="width-4-9">
                        <label>Last Name</label>
                        <span className="astrik">&#42;</span>
                        <input
                          type="text"
                          className="input-form"
                          name="lastName"
                          placeholder="Last name"
                          required
                          value={inputs.lastName || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="width-4-9">
                        <label>E-mail</label>
                        <span className="astrik">&#42;</span>
                        <input
                          type="text"
                          className="input-form"
                          name="email"
                          placeholder="email@gmail.com"
                          required
                          value={inputs.email || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="width-4-9">
                        <label>Phone Number</label>
                        <span className="astrik">&#42;</span>
                        <input
                          type="text"
                          className="input-form"
                          name="phoneNumber"
                          placeholder="0351"
                          required
                          value={inputs.phoneNumber || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="width-10">
                        <label>Address</label>
                        <input
                          type="text"
                          className="input-form"
                          name="addressLine1"
                          placeholder="Address line 1"
                          required
                          value={inputs.addressLine1 || ""}
                          onChange={handleChange}
                        />
                        <input
                          type="text"
                          className="input-form"
                          name="addressLine2"
                          placeholder="Address line 2"
                          required
                          value={inputs.addressLine2 || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="width-10">
                        <label>City</label>
                        <input
                          type="text"
                          className="input-form"
                          placeholder="City"
                          name="city"
                          required
                          value={inputs.city || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="width-4-9">
                        <label>District</label>
                        <input
                          type="text"
                          className="input-form"
                          name="district"
                          placeholder="District"
                          required
                          value={inputs.district || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="width-4-9">
                        <label>Postal Code</label>
                        <input
                          type="text"
                          className="input-form"
                          name="zipCode"
                          placeholder="0000-000"
                          required
                          value={inputs.zipCode || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="checkout-right-section width-4">
                  <div className="card">
                    <div className="apply-promo">
                      <label>Coupon code</label>
                      <div className="promo-inner">
                        <input type="text" className="input-form" />
                        <button className="btn">Apply</button>
                      </div>
                    </div>
                    <div className="radio-section">
                      <h5>Payment method</h5>
                      <div className="inner-content">
                        <div className="form-check">
                          <label
                            className="form-check-label"
                            htmlFor="card_payment"
                          >
                            <input
                              className="form-check-input"
                              type="radio"
                              name="payment_method"
                              value="card"
                              id="card_payment"
                              checked={payment === "card"}
                              onChange={onChangePayment}
                            />
                            Credit card
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment_method"
                            value="net_banking"
                            id="net_banking_payment"
                            checked={payment === "net_banking"}
                            onChange={onChangePayment}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="net_banking_payment"
                          >
                            Net banking
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="payment_method"
                            value="paypal"
                            id="paypal_payment"
                            checked={payment === "paypal"}
                            onChange={onChangePayment}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="paypal_payment"
                          >
                            Paypal
                          </label>
                        </div>
                        <div className="width-10 form-check tick-box">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="terms"
                            value=""
                            id="terms"
                          />
                          <label className="form-check-label" htmlFor="terms">
                            I have read and agree to the Ativo Kids Terms and
                            Conditions.
                          </label>
                        </div>
                        <div className="full-btn">
                          <a
                            href="./success"
                            onClick={handleSubmit}
                            className="btn"
                          >
                            Proceed to payment
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
