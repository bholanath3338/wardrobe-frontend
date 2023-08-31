import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Banner from "../Components/Banner";
import ProductGrid from "../Components/Product/ProductGrid";

export default function ProductList(props) {
  const [searchParams] = useSearchParams();
  const [params, setparams] = useState({});

  useEffect(() => {
    let nParams = {};
    if (searchParams.get("search")) {
      nParams.search = searchParams.get("search");
    }
    if (searchParams.get("category")) {
      nParams.category_id = searchParams.get("category");
    }
    setparams(nParams);
  }, [searchParams]);

  return (
    <>
      <Banner image="assets/img/product-list-banner.jpg">
        <h1>Products</h1>
      </Banner>
      <main>
        <section className="home-page">
          <div className="container">
            <div className="container-inner">
              <div>
                <h1>Products</h1>
                <ProductGrid params={params} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
