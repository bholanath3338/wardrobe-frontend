import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../Components/Banner";
import { useNavigate } from "react-router-dom";
import OrderService from "../Services/orderService";
import AuthService from "../Services/authService";

export default function Thankyou() {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!AuthService.isLogedIn()) {
      navigate("/login");
      return;
    }
    OrderService.get(id)
      .then((orderRes) => {
        setOrder(orderRes);
      })
      .catch(() => {
        navigate(`/`);
      });
  }, [id, navigate]);

  return (
    <>
      <Banner image="assets/img/success-banner.jpg">
        <h1>Success</h1>
      </Banner>
      <main className="margintop100">
        <section className="home-page">
          <div class="container">
            <div class="succes-page-inner parent-row justify-content-center text-allign-center">
              <div class="width-10">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width="67"
                  height="67"
                  viewBox="0 0 67 67"
                >
                  <g
                    id="Group_106394"
                    data-name="Group 106394"
                    transform="translate(-43.511 0.489)"
                  >
                    <g
                      id="Group_121"
                      data-name="Group 121"
                      transform="translate(45.011 1.011)"
                    >
                      <circle
                        id="Ellipse_28"
                        data-name="Ellipse 28"
                        cx="32"
                        cy="32"
                        r="32"
                        transform="translate(0 0)"
                        stroke-width="3"
                        stroke="#5eb130"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        fill="none"
                      />
                    </g>
                    <path
                      id="Path_115"
                      data-name="Path 115"
                      d="M50,22.578l8.747,8.747L82.071,8"
                      transform="translate(9.54 13.349)"
                      fill="none"
                      stroke="#5eb130"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                  </g>
                </svg>
              </div>

              <div class="width-10 success-message">
                <div class="success-message-inner">
                  <section>Your order has been placed</section>

                  <div class="success-row f-flex justify-content-between">
                    <p>Order Id.</p>
                    <p>{order._id && order._id}</p>
                  </div>
                  <div class="f-flex justify-content-between font-weight-bold">
                    <p>Total</p>
                    <p>${order.total && order.total}</p>
                  </div>
                  <div class="full-btn">
                    <Link to="/" class="btn">
                      Continue Shopping
                    </Link>
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
