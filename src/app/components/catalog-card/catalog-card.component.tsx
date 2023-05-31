import { PageWrapper } from "../wrapper";
import {
  CatalogCard,
  CatalogDivisor,
  CatalogText,
  Column,
} from "./catalog-card.component.style";

export const CatalogCardComponent: React.FC = () => {
  return (
    <CatalogCard>
      <PageWrapper>
        <Column>
          <CatalogText>Catálogo</CatalogText>
          <CatalogDivisor />
        </Column>
      </PageWrapper>
    </CatalogCard>
  );
};
