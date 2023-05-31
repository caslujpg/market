import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: #252525;
  width: 100%;
  height: 6.7rem;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 1.8rem;

   @media (max-width: 76.8rem) {
    left: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
    padding: 2.4rem 1.4rem;
    flex-direction: column;
    height: 18.6rem;
  }
`;

export const HeaderText = styled.p`
  color: var(--text-secondary);
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.5rem;
`;

export const HeaderPrice = styled.span`
  color: var(--text-secondary);
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.5rem;
`;

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
  background: linear-gradient(90deg, var(--gradient-primary-color), var(--gradient-secondary-color));
`;
