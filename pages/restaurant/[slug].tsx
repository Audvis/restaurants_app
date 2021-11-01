import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";

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
  const [Reviews, setReviews] = useState([]);

  useEffect(() => {
    const getInfoRestaurant = async () => {
      try {
        const response = await fetch(
          `https://tellurium.behuns.com/api/restaurants/${slug}/`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Accept-Language": "es",
            },
          }
        );
        const data = await response.json();
        setInfo(data);

        let arr = [];

        data.food_type.map(async (food_type) => {
          const responseType = await fetch(
            `https://tellurium.behuns.com/api/food_types/${food_type}/`,
            {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Accept-Language": "es",
              },
            }
          );
          const dataType = await responseType.json();
          arr.push(dataType);
          setTypes(Types.concat(arr));
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
      <ul>
        {Info.reviews.map((review) => (
          <li key={review.slug}>
            <p>{review.comments}</p>
            <p>{review.email}</p>
            <p>{review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default slug;
