import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/layout/Layout";
import RestaurantsList from "../components/showRestaurants/restaurantsList/RestaurantsList";
import { getRestaurants } from "../redux/actions/main";
import styled from "@emotion/styled";

const Heading = styled.h1`
  color: var(--primaryColor);
  @media (min-width: 768px) {
    text-align: center;
  }
`;

function Home(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <div>
      <Layout>
          <h1>Home</h1>
      </Layout>

      <RestaurantsList />
    </div>
  );
}

export default Home;
