import { useState, useEffect } from "react";
import Select from "react-select";
import API from "../../api/api";
import styled from "@emotion/styled";

const Form = styled.form`
 width: 70rem;
 min-height: 55rem;
 max-height: fit-content;
 background-color: var(--primaryColor);
 color: var(--white);
 padding: 5rem;
 border-radius: 5px;
 box-shadow: 3px 3px 4px rgba(0,0,0,0.5);
 display: flex;
 flex-direction: column;
 @media (max-width: 768px) {
   width: 90%;
 }
`;
const Title = styled.h4`
text-align: center;
  font-size: 4.7rem;
`;
const SubContainer = styled.div`
  display: flex;
  align-items: space-between;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Label = styled.label`
  margin-right: 2rem;
`;
const Input = styled.input`
  width: 100%;
`;
const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 10rem;
`;
const Button = styled.input`
  margin: auto;
  margin-top: 3rem;
  padding: 1rem;
  width: 30%;
  background-color: var(--secondaryColor);
  border-radius: 7px;
`;

const CreateRestaurant = () => {

  //States______________________________________________________________________________________________________________
  const [Restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    logo: null,
    food_type: '',
  });
  const { name, description, logo } = Restaurant;

  const [FoodTypes, setFoodTypes] = useState([{ slug: "", name: "" }]);
  const foodTypesArr = [];
  FoodTypes.map((type) =>
    foodTypesArr.push({
      value: type.slug,
      label: type.name,
    })
  );

  //UseEffect______________________________________________________________________________________________________________
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

  
  //Function______________________________________________________________________________________________________________
  const updateRestaurant = (e) => {
    setRestaurant({
      ...Restaurant,
      [e.target.name]: e.target.value,
    });
  };
  const uploadLogo = (e) => {
    setRestaurant({
      ...Restaurant,
      logo: e.target.files[0],
    });
  };
  const updateTypes = (e) => {
    setRestaurant({
      ...Restaurant,
      food_type: e.map((type) => type.value),
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();   
    const f = new FormData();
    f.append("logo", logo);
    const apiData = {...Restaurant, logo: null};
    const postRestaurant = async () => {
      try {
        let config = {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "en",
          },
          body: JSON.stringify(apiData),
        };
        let res = await fetch(`${API}restaurants/`, config);
        let json = await res.json();
        console.log("respuestaApi-------------", json);

        let configPatch = {
          method: "PATCH",
          headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data; boundary=something",
            "Accept-Language": "en",
          },
          body: f.get("logo"),
        };
        let resPatch = await fetch(`${API}restaurants/${json.slug}/`, configPatch);
        let jsonPatch = await resPatch.json();
        console.log("respuestaApiPatch-------------", jsonPatch);
      } catch (err) {
        console.log(err);
      }
    };
    postRestaurant();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Title>Form</Title>
      <SubContainer>
        <Label htmlFor="">Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={updateRestaurant}
        />
      </SubContainer>
      <SubContainer>
        <Label htmlFor="">Description</Label>
        <Textarea
          name="description"
          value={description}
          onChange={updateRestaurant}
        />
      </SubContainer>
      <SubContainer>
        <Label htmlFor="">Logo</Label>
        <Input type="file" accept="image/*"  name="logo" onChange={uploadLogo} />
      </SubContainer>
      {/* <img src={logo} alt="imagen subida" /> */}
      <SubContainer>
      <Label htmlFor="">Types</Label>
        <Select
          isDisabled={false}
          isLoading={false}
          isClearable={false}
          isRtl={false}
          isSearchable={true}
          options={foodTypesArr}
          name="food_types"
          onChange={updateTypes}
          instanceId="food_types"
          isMulti
        />
      </SubContainer>
      <Button type="submit" />
    </Form>
  );
};

export default CreateRestaurant;
