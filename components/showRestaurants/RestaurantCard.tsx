import React from "react";
import Link from "next/link";

interface IRestaurantCardProps {
  restaurant: {
    slug: string;
    name: string;
    description: string;
    logo: string;
    rating: number;
  };
}

const RestaurantCard: React.FC<IRestaurantCardProps> = ({ restaurant }) => {
  return (
    <>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.description}</p>
      <img src={restaurant.logo} alt="" />
      <p>{restaurant.rating}</p>
      <Link href="/restaurant/[slug]" as={`/restaurant/${restaurant.slug}`}>
      <button>info</button>
      </Link>
     
    </>
  );
};

export default RestaurantCard;
