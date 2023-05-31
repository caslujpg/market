import { CardComponent } from "../card";
import { ProductListWrapper } from "./product-list.component.style";

type ProductListOptions = {
  id: string;
  details: {
    name: string;
    description: string;
  };
};

export const ProductList = ({
  products,
}: {
  products: ProductListOptions[];
}) => {
  return (
    <ProductListWrapper>
      {products.map(({ details, id }, index) => {
        return <CardComponent key={index} id={id} details={details} />;
      })}
    </ProductListWrapper>
  );
};
