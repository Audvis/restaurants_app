import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import CreateType from "../components/createType/CreateType";
import API from "../api/api";
import TypeEditCard from "../components/showTypes/TypeEditCard";

const food_types = () => {
  const [Types, setTypes] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const response = await fetch(`${API}food_types/`);
      const body = await response.json();
      setTypes(body);
    };
    apiCall();
  }, []);

  return (
    <div>
      <Layout>
        <h3>Food Types</h3>
      </Layout>
      <ul>
        {Types.map((type) => (
          <li key={type.slug}>
          <TypeEditCard type={ type }/>  
          </li>
        ))}
      </ul>
      <CreateType />
    </div>
  );
};

export default food_types;
