import React from "react";
import Select from "react-select";

const EditRestaurant = ({
  ContainerData,
  Restaurant,
  Img,
  Description,
  Rating,
  Types,
  TypeCard,
  setRestaurant
}) => {
  return (
    <ContainerData>
      <h1>{Restaurant.name}</h1>
      <input
        type="text"
        value={Restaurant.name}
        onChange={(e) => setRestaurant({ ...Restaurant, name: e.target.value })}
      />
      <Img src={Restaurant.logo} alt="imageLogo" />
      <Description>{Restaurant.description}</Description>
      <input
        type="text"
        value={Restaurant.description}
        onChange={(e) =>
          setRestaurant({ ...Restaurant, description: e.target.value })
        }
      />
      <Rating>Rating: {Number(Restaurant.rating).toFixed(1)}</Rating>
      <h3>Types</h3>
      <ul>
        {Types.map((food_type) => (
          <TypeCard key={food_type.slug} food_type={food_type} />
        ))}
      </ul>
      <div>
        <Select
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={true}
          options={Types}
          name="food_types"
          onChange={setRestaurant({ ...Restaurant, food_types: Types })}
          instanceId="food_types"
          isMulti
        />
      </div>
    </ContainerData>
  );
};

export default EditRestaurant;
