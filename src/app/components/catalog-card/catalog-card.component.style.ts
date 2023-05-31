import styled from 'styled-components';


export const CatalogCard = styled.div`
  width: 100%;
  box-shadow: 0 4px 4px var(--card-border);
  padding: 2.9rem 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 3.4rem;
`;

export const CatalogText = styled.h1`
  color: var(--text-primary);
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 100%;
`;

export const CatalogDivisor = styled.div`
  border-radius: 0.4rem;
  width: 3.4rem;
  height: 0.4rem;
  background: linear-gradient(90deg, var(--gradient-primary-color), var(--gradient-secondary-color));
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;