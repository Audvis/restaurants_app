import React from "react";
import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";

const RestaurantsList: React.FC = () => {
  const { allRestaurantsState } = useSelector((state: any) => state.reducerMain);
  return (
    <ul>
      {allRestaurantsState.map((restaurant) => (
        <li key={restaurant.slug}>
          <RestaurantCard restaurant={restaurant} />
        </li>
      ))}
    </ul>
  );
};

export default RestaurantsList;
