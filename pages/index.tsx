import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterBar from "../components/layout/FilterBar";
import Layout from "../components/layout/Layout";
import RestaurantsList from "../components/showRestaurants/restaurantsList/RestaurantsList";
import { getRestaurants } from "../redux/actions/main";

function Home(): JSX.Element {
  const dispatch = useDispatch();
  const { filterState } = useSelector((state: any) => state.reducerMain);

  useEffect(() => {
    dispatch(getRestaurants(filterState));
  }, [filterState]);

  return (
    <div>
      <Layout>
      <FilterBar />
          <h1>Home</h1>
      </Layout>
     
      <RestaurantsList />
    </div>
  );
}

export default Home;
