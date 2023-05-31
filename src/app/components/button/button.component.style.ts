import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: linear-gradient(90deg, var(--gradient-primary-color), var(--gradient-secondary-color));
  color: var(--text-secondary);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.05rem 2.4rem;
  gap: 1rem;
  transition: background-color 0.3s;
  height: 4.5rem;
  border-radius: 0.8rem;
  
  :hover {
    background: linear-gradient(#352f3a, #352f3a) padding-box, linear-gradient(90deg, var(--gradient-primary-color), var(--gradient-secondary-color)) border-box;
    border: 1px solid transparent;
  }
`;