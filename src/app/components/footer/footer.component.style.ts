import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 6.5rem;
  background-color: #E9E9E9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;

  @media (max-width: 76.8rem) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2.8rem;
    padding: 2.4rem 1.4rem;
    margin-bottom: 18.6rem;
  }
`;

export const ButtonLink = styled.a`
  color: var(--text-primary);
  text-decoration: none;
  cursor: pointer;
  margin: 3.6rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  
  @media (max-width: 76.8rem) {
    margin: 0.1rem;
    max-height: 100%;
    line-height: 0.1rem;
  }
`;

