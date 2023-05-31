import styled from "styled-components";

export const ProductListWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-auto-rows: minmax(15rem, auto);
  grid-template-columns: repeat(auto-fit, minmax(19.25rem, auto));
  margin-bottom: 7rem;
`;