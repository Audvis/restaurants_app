import styled from '@emotion/styled';

export const Card = styled.div`
  background-color: var(--primaryColor);
  width: 35rem;
  height: 40rem;
  margin: 3rem;
  margin-bottom: 10rem;
  padding-top: 3rem;
  border-radius: 20px 20px 10px 10px;
  position: relative;
  box-shadow: 3px 4px 7px rgba(20, 20, 20, 0.7);
  cursor: pointer;  
  transition: all .3s ease-in-out; 

  &:hover {
    transform: scale(1.008);
    transition: all .3s ease-in-out;
    box-shadow: 4px 5px 10px rgba(20, 20, 20, 0.7);
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: .8rem;
    margin-bottom: 3rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: var(--white);
`;

export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 60%;
  @media (max-width: 768px) {
  }
`;

export const Description = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
  padding: 1rem;
  background-color: var(--secondaryColor);
  color: var(--white);
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
  }
`;
export const Rating = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: var(--white);
  background-color: var(--secondaryColor);
  padding: 1.7rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;