import styled from "@emotion/styled";

export const ContainerData = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
  }
`;

export const Img = styled.img`
  width: 50%;
`;

export const Description = styled.p`
  font-size: 1.5rem;
`;

export const H3 = styled.h3`
  font-size: 4rem;
  margin-bottom: 0;
`;

export const UlTypes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
`;

export const Rating = styled.p`
  font-size: 1.5rem;
`;

export const Reviews = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  background-color: #f5f5f5;
  padding: 1rem;
  @media (min-width: 500px) {
    width: 70%;
    padding: 7rem;
  }
`;
