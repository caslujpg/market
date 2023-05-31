import { GlobalStyle } from ".././global.style";
import { BannerComponent } from "../components/banner";
import { FooterComponent } from "../components/footer";
import { CatalogCardComponent } from "../components/catalog-card";
import { PageWrapper } from "../components/wrapper";
import { ResultComponent } from "../components/result";
import { useCallback, useEffect, useState } from "react";
import { ProductList } from "../components/product-list/product-list.component";
import { InfiniteScroll } from "../components/infinite-scroll";
import { HeaderComponent } from "../components/header";
import { MainComponent } from "./Home.style";

type Product = {
  id: string;
  details: {
    name: string;
  };
};

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);
  const [load, setLoad] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1026);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getProduct = useCallback(async (page?: number) => {
    setLoad(true);
    const size = 50;
    const skip = page ? page * 50 : 50;
    const response = await fetch(
      `https://test-candidaturas-front-end.onrender.com/families?skip=${skip}&take=${size}`
    );
    const productsResponse = await response.json();
    setProducts((prevProducts) => [...prevProducts, ...productsResponse]);
    setPage((prevPage) => prevPage + 1);
    setHasMoreProducts(productsResponse.length !== 0);
    setLoad(false);
  }, []);

  function fetchMore() {
    if (hasMoreProducts && !load) {
      getProduct(page);
    }
  }

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <>
      <GlobalStyle />

      {!isMobile && <BannerComponent />}

      <MainComponent>
        <HeaderComponent />

        <CatalogCardComponent />
        <ResultComponent />
        <PageWrapper>
          <ProductList products={products} />
        </PageWrapper>

        <FooterComponent />
      </MainComponent>

      {isMobile && <BannerComponent variant="mobile" />}

      <InfiniteScroll callback={fetchMore} />
    </>
  );
}
