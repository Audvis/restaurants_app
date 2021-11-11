import { useState, useEffect } from 'react';
import Select from "react-select";
import API from "../../api/api"

const EditRestaurant = ({
  ContainerData,
  Restaurant,
  Img,
  Description,
  Types,
  TypeCard,
  setRestaurant
}) => {

  const [CopyRestaurant, setCopyRestaurant] = useState({...Restaurant});
  const [FoodTypes, setFoodTypes] = useState([]);
  const [PrintTypes, setPrintTypes] = useState([]);
  console.log(PrintTypes);

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

    setPrintTypes(Types);
    apiGetTypes();
    
  }, []);


  const foodTypesArr = [];
  FoodTypes.map((type) =>
    foodTypesArr.push({
      value: type.slug,
      label: type.name,
    })
  );

  const selectedTypesArr = [];
  Types.map((type) =>
    selectedTypesArr.push({
      value: type.slug,
      label: type.name,
    })
  );
  

  function deleteRestaurant(slug){
     const deleteApiRestaurant = async () => {
      try{
        const response = await fetch(`${API}restaurants/${slug}/`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "en",
          }
        });
        const data = await response.json();
        console.log(data);
      }catch(error){
        console.log(error);
      }
    }
    deleteApiRestaurant();
  }

  function updateTypes(t){
console.log('t----------',t)
    setCopyRestaurant({
       ...CopyRestaurant, 
        food_type: t.map(e => e.value) 
      });
      setPrintTypes(t.map(e => ({name: e.label, slug: e.value})));
  }

  return (
    <ContainerData>
      <h1>{CopyRestaurant.name}</h1>
      <input
        type="text"
        value={CopyRestaurant.name}
        onChange={(e) => setCopyRestaurant({ ...CopyRestaurant, name: e.target.value })}
      />
      <Img src={CopyRestaurant.logo} alt="imageLogo" />
      <Description>{CopyRestaurant.description}</Description>
      <input
        type="text"
        value={CopyRestaurant.description}
        onChange={(e) =>
          setCopyRestaurant({ ...CopyRestaurant, description: e.target.value })
        }
      />
      <h3>Types</h3>
      <ul>
        {PrintTypes.map((type) => (
          <TypeCard key={type.slug} food_type={type} />

        ))}
      </ul>
      <div>
        <Select
         defaultValue={selectedTypesArr}
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={true}
          options={foodTypesArr}
          name="food_types"
          onChange={e => updateTypes(e)}
          instanceId="food_types"
          isMulti
        />
      </div>
      <button onClick={() => deleteRestaurant(Restaurant.slug)}>delete</button>
    </ContainerData>
  );
};

export default EditRestaurant;
