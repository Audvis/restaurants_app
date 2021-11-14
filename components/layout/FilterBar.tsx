import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/actions/main";
import API from "../../api/api";
import styled from "@emotion/styled";

const Container = styled.div`
    background-color: var(--primaryColor);
    height: 5rem;
`;
const Select = styled.select`
    margin-top: 0;
`;	

const FilterBar = () => {
  const { filterState } = useSelector((state: any) => state.reducerMain);
  const dispatch = useDispatch();

  const [FoodTypes, setFoodTypes] = useState([]);

  useEffect(() => {
    const apiGetTypes = async () => {
      try {
        const response = await fetch(`${API}food_types/`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Accept-Language": "en",
          },
        });
        const data = await response.json();
        setFoodTypes(data);
      } catch (error) {
        console.log(error);
      }
    };
    apiGetTypes();
  }, []);

  const updateFilter = (e) => {
    const foodType = e.target.value;
    dispatch(setFilter(foodType));
  };

  return (
    <Container>
      <Select onChange={updateFilter} value={filterState}>
        <option value="">All</option>
        {FoodTypes.map((foodType) => {
          return (
            <option
              key={foodType.slug}
              value={`?food_type__slug=${foodType.slug}`}
            >
              {foodType.name}
            </option>
          );
        })}
      </Select>
    </Container>
  );
};

export default FilterBar;
