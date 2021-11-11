import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { Img, ContainerData, Description, Rating, Types } from "./StylesSlug";
import Layout from "../../components/layout/Layout";
import API from "../../api/api";
import ReviewCard from "../../components/showReviews/ReviewCard";
import CreateReview from "../../components/createReview/CreateReview";
import TypeCard from "../../components/showTypes/TypeCard";
import EditRestaurant from "../../components/editRestaurant/EditRestaurant";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [Restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    logo: "",
    rating: 0,
    food_type: [],
    reviews: [],
  });
  const [Types, setTypes] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [SwitchEdit, setSwitchEdit] = useState(false);

  useEffect(() => {
    const getInfoRestaurant = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API}restaurants/${slug}/`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Accept-Language": "en",
          },
        });
        const data = await response.json();
        setRestaurant(data);

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
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getInfoRestaurant();
  }, [slug]);

  if (Loading) {
    return <h1>Loading...</h1>;
  } else
    return (
      <>
        <Layout></Layout>
        <ContainerData>
          {SwitchEdit ? (
            <>
              <button onClick={(e) => setSwitchEdit(false)}>X</button>
              <EditRestaurant
                ContainerData={ContainerData}
                Restaurant={Restaurant}
                Img={Img}
                Description={Description}
                Types={Types}
                TypeCard={TypeCard}
                setRestaurant={setRestaurant}
              />
            </>
          ) : (
            <>
              <button onClick={(e) => setSwitchEdit(true)}>Edit</button>
              <h1>{Restaurant.name}</h1>
              <Img src={Restaurant.logo} alt="imageLogo" />
              <Description>{Restaurant.description}</Description>
              <Rating>Rating: {Number(Restaurant.rating).toFixed(1)}</Rating>
              <h3>Types</h3>
              <ul>
                {Types.map((food_type) => (
                  <TypeCard key={food_type.slug} food_type={food_type} />
                ))}
              </ul>
              <h3>Reviews</h3>
              <CreateReview slug={slug} />
              {!Restaurant.reviews ? (
                <p>No hay reviews</p>
              ) : (
                <>
                  <ul>
                    {Restaurant.reviews.map((review) => (
                      <ReviewCard key={review.slug} review={review} />
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
        </ContainerData>
      </>
    );
};

export default slug;
