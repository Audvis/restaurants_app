import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/layout/Layout";
import RestaurantsList from "../components/showRestaurants/RestaurantsList";
import { getRestaurants } from '../redux/actions/main';


 function Home(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants()) 
  }, []);

  return (
    <div>
      <Layout>
        <h1>Home</h1>
      </Layout>
      <RestaurantsList  />
    </div>
  );
}

export default Home;
