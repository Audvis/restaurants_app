import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import API from "../../api/api";

const slug = () => {
  const router = useRouter();
  //   const slug = router.asPath.split("/")[2];
  const slug = router.query.slug;

  const [Info, setInfo] = useState({
    name: "",
    description: "",
    logo: "",
    rating: 0,
    food_type: [],
    reviews: [],
  });
  const [Types, setTypes] = useState([]);

  useEffect(() => {
    const getInfoRestaurant = async () => {
      try {
        
        const response = await fetch(`${API}restaurants/${slug}/`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Accept-Language": "en",
          },
        });
        const data = await response.json();
        setInfo(data);

        let foodTypesArr = [];

        data.food_type.map(async (food_type) => {
          const responseType = await fetch(`${API}food_types/${food_type}/`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Accept-Language": "en",
            },
          });
          const dataType = await responseType.json();
          foodTypesArr.push(dataType);
          setTypes(Types.concat(foodTypesArr));
        });
      } catch (error) {
        console.log(error);
      }
    };
      getInfoRestaurant();  
  }, []);
  console.log(Info);
  return (
    <div>
      <Layout>
        <h1>{Info.name}</h1>
      </Layout>
      <p>{Info.description}</p>
      <img src={Info.logo} alt="imageLogo" />
      <p>{Info.rating}</p>
      <ul>
        {Types.map((food_type) => (
          <li key={food_type.slug}>{food_type.name}</li>
        ))}
      </ul>
      {!Info.reviews? (
        <p>No hay reviews</p>
      ) : (
        <ul>
          {Info.reviews.map((review) => (
            <li key={review.slug}>
              <p>{review.comments}</p>
              <p>{review.email}</p>
              <p>{review.rating}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default slug;
