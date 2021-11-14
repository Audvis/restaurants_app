import CreateRestaurant from "../../components/createRestaurant/CreateRestaurant";
import Layout from "../../components/layout/Layout";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const restaurant = () => {
  return (
    <>
      <Layout>
        <h1>Add Restaurant</h1>
      </Layout>
    <Container>
      <CreateRestaurant />
    </Container>
    </>
  );
};

export default restaurant;
