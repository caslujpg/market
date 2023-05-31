import { GlobalStyle } from ".././global.style";
import { HeaderComponent } from "../components/header";
import { FooterComponent } from "../components/footer";
import { CatalogCardComponent } from "../components/catalog-card";
import { CardComponent } from "../components/card";
import { PageWrapper } from "../components/wrapper";
import { ResultComponent } from "../components/result";
import { useCallback, useEffect, useState } from "react";
import { ProductList } from "../components/product-list/product-list.component";

type Product = {
  id: string;
  details: {
    name: string;
    description: string;
  };
};

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);

  const getProduct = useCallback(async (page?: number) => {
    const size = 50;
    const skip = page ? page * 50 : 50;
    const response = await fetch(
      `https://test-candidaturas-front-end.onrender.com/families?skip=${skip}&take=${size}`
    );
    const productsResponse = await response.json();
    setProducts((prevProducts) => [...prevProducts, ...productsResponse]);
    setPage((prevPage) => prevPage + 1);
    setHasMoreProducts(productsResponse.lenght === 0);
  }, []);

  function fetchMore() {
    if (hasMoreProducts === true) getProduct(page);
  }

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <CatalogCardComponent />
      <ResultComponent />
      <PageWrapper>
        <ProductList
          products={products}
          // fetchMore={fetchMore}
          // hasMoreProducts={hasMoreProducts}
        />
      </PageWrapper>

      <FooterComponent />
    </>
  );
}
