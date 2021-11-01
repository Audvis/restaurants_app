import React from "react";
import Link from "next/link";
import { Card, Title, Img, Description, Rating } from './CardStyle'

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
    <Link href="/restaurant/[slug]" as={`/restaurant/${restaurant.slug}`}>
        <Card>
          <Title>{restaurant.name}</Title>
          <Img src={restaurant.logo} alt="restaurant_logo" />
          <Description>
            <p>{restaurant.description}</p>
          </Description>
          <Rating>
            <p>{Math.round(restaurant.rating)}</p>
            {/* <p>{Number(restaurant.rating).toFixed(1)}</p> */}
          </Rating>
        </Card>
    </Link>
  );
};

export default RestaurantCard;

