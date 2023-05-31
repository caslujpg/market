import styled from "styled-components";


export const CardWrapper = styled.div`
  border: 0.1rem solid var(--card-border);
  border-radius: 0.8rem;
  width: 17.6rem;
  height: 23.4rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 1.583rem;
`;

export const Card = styled.div`
  >img {
    object-fit: contain;
    width: 100%;
    height: 19.2rem;
  }
`;

export const CardButton = styled.button`
  height: 3.6rem;
  width: 100%;
  padding: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
`;

export const CardText = styled.p`
  color: var(--primary-text);
  font-weight: 600;
  font-size: 1rem;
  line-height: 100%;
  text-overflow: ellipsis;
`;

export const Divider = styled.div`
  border: 0.1rem solid var(--card-border);
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex: 1;
`;

export const CardDivisor = styled.span`
  height: 100%;
  width: 0.1rem;
  background-color: var(--text-primary);
  justify-self: flex-end;
`;