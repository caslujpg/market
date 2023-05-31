import styled from "styled-components";

export const IconWrapper = styled.div`
  margin: 1.3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const DividerGradient = styled.div`
  width: 100%;
  height: 0.1rem;
  background: linear-gradient(
    90deg,
    var(--gradient-primary-color),
    var(--gradient-secondary-color)
  );
`;
