import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import CreateType from "../components/createType/CreateType";
import API from "../api/api";
import TypeEditCard from "../components/showTypes/TypeEditCard";
import styled from "@emotion/styled";


//Styles______________________________________________________________________________________________________________
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
 
`;


//Component____________________________________________________________________________________________________________
const food_types = () => {
  const [Types, setTypes] = useState([]);
  const [ChangeType, setChangeType] = useState(false);
console.log(ChangeType);
  useEffect(() => {
    const apiCall = async () => {
      const response = await fetch(`${API}food_types/`);
      const body = await response.json();
      setTypes(body);
    };
    apiCall();
  }, [ChangeType]);

  return (
    <>
      <Layout>
        <h3>Food Types</h3>
      </Layout>
      <Container>
        <CreateType 
        ChangeType={ChangeType}
        setChangeType={setChangeType}/>
        <Ul>
          {Types.map((type) => (
            <li key={type.slug}>
              <TypeEditCard 
              type={type} 
              setChangeType={setChangeType}
              ChangeType={ChangeType}
              />
            </li>
          ))}
        </Ul>
      </Container>
    </>
  );
};
export default food_types;
