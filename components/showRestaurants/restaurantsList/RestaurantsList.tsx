import React from "react";
import { useSelector } from "react-redux";
import RestaurantCard from "../restaurantCard/RestaurantCard";
import styled from '@emotion/styled';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const RestaurantsList: React.FC = () => {
  const { allRestaurantsState } = useSelector((state: any) => state.reducerMain);
  return (
    <Ul>
      {allRestaurantsState.map((restaurant) => (
        <li key={restaurant.slug}>
          <RestaurantCard restaurant={restaurant} />
        </li>
      ))}
    </Ul>
  );
};

export default RestaurantsList;
