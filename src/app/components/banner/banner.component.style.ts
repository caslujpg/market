import styled from "styled-components";

export const BannerStyled = styled.div`
  background-color: #252525;
  width: 100%;
  height: 6.7rem;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 1.8rem;

   @media (max-width: 1026px) {
    padding: 2.4rem 1.4rem;
    flex-direction: column;
    height: 18.6rem;
  }
`;

export const BannerText = styled.p`
  color: var(--text-secondary);
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.5rem;
`;

export const BannerPrice = styled.span`
  color: var(--text-secondary);
  font-style: normal;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.5rem;
`;


export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

export const CloseButtonText = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
`;