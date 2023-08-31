import { Link } from "react-router-dom";
import { contants } from "../Contants/contants";
import Banner from "./Banner";
import ProductGrid from "./Product/ProductGrid";
import Search from "./Search";

export default function Home() {
  return (
    <>
      <Banner image="assets/img/home-banner.jpg">
        <Search />
      </Banner>
      <main>
        <section className="home-page">
          <div className="container">
            <div className="container-inner">
              <div className="collage-main">
                <h1>MEN CLOTHING</h1>
                <p>Explore the men store here!</p>
                <div className="parent-row justify-content-between collage home-collage-1">
                  <div className="collage-container-2 width-7-5 parent-row justify-content-between">
                    <div className="collage-inner collage-3">
                      <Link to={`products/?category=${contants.men[0]}`}>
                        <div
                          className="collage-3-bg collage-bg"
                          style={{
                            backgroundImage: "url(assets/img/boy/tshirts.jpg)",
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">T-SHIRTS</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-4">
                      <Link to={`products/?category=${contants.men[1]}`}>
                        <div
                          className="collage-4-bg collage-bg"
                          style={{
                            backgroundImage:
                              "url(assets/img/boy/athestic-wear.jpg)",
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              ATHESTIC WEAR
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-5">
                      <Link to={`products/?category=${contants.men[2]}`}>
                        <div
                          className="collage-5-bg collage-bg"
                          style={{
                            backgroundImage:
                              "url(assets/img/boy/winter-wears.jpg)",
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              WINTER WEAR
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-6">
                      <Link to={`products/?category=${contants.men[3]}`}>
                        <div
                          className="collage-6-bg collage-bg"
                          style={{
                            backgroundImage: "url(assets/img/boy/sweaters.jpg)",
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">SWEATERS</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="collage-container-1 width-2-5">
                    <div className="collage-inner collage-1">
                      <Link to={`products/?category=${contants.men[4]}`}>
                        <div
                          className="collage-1-bg collage-bg"
                          style={{
                            backgroundImage: "url(assets/img/boy/formals.jpg)",
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              FORMAL WEAR
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-2">
                      <Link to={`products/?category=${contants.men[5]}`}>
                        <div
                          className="collage-2-bg collage-bg"
                          style={{
                            backgroundImage:
                              "url(assets/img/boy/waist-coats.jpg)",
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              WAIST COATS
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-products">
                <h1>RECOMMENDED FOR YOU</h1>
                <ProductGrid params={{ product_ids: contants.recomended }} />
              </div>
              <div className="collage-main">
                <h1>Women Clothing</h1>
                <p>Explore the Women store here!</p>
                <div className="parent-row justify-content-between collage home-collage-1">
                  <div className="collage-container-1 width-2-5">
                    <div className="collage-inner collage-1">
                      <Link to={`products/?category=${contants.women[0]}`}>
                        <div
                          className="collage-1-bg collage-bg"
                          style={{
                            backgroundImage:
                              "url(assets/img/girls/dresses.jpg)",
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              TRADITIONAL SUITS
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-2">
                      <Link to={`products/?category=${contants.women[1]}`}>
                        <div
                          className="collage-2-bg collage-bg"
                          style={{
                            backgroundImage:
                              "url(assets/img/girls/hoodies.jpg)",
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              BELL-BOTTOM
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="collage-container-2 width-7-5 parent-row justify-content-between">
                    <div className="collage-inner collage-3">
                      <Link to={`products/?category=${contants.women[2]}`}>
                        <div
                          className="collage-3-bg collage-bg"
                          style={{
                            backgroundImage:
                              "url(assets/img/girls/ruffle-frocks.jpg)",
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              JEAN AND TSHIRTS
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-4">
                      <Link to={`products/?category=${contants.women[3]}`}>
                        <div
                          className="collage-4-bg collage-bg"
                          style={{
                            backgroundImage:
                              "url(assets/img/girls/rompers.jpg)",
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">T-SHIRTS</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-5">
                      <Link to={`products/?category=${contants.women[4]}`}>
                        <div
                          className="collage-5-bg collage-bg"
                          style={{
                            backgroundImage:
                              "url(assets/img/girls/jump-suits.jpg)",
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">FROCKS</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="collage-inner collage-6">
                      <Link to={`products/?category=${contants.women[5]}`}>
                        <div
                          className="collage-6-bg collage-bg"
                          style={{
                            backgroundImage:
                              "url(assets/img/girls/long-frock.jpg)",
                          }}
                        >
                          <div className="collage-inner-shaddow">
                            <div className="collage-inner-text">
                              LONG FROCKS
                            </div>
                          </div>
                        </div>
                      </Link>
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
