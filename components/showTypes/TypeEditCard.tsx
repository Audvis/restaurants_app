import { useState } from "react";
import API from "../../api/api";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 20rem;
  height: 13rem;
  text-align: center;
  background-color: var(--primaryColor);
  color: var(--white);
  margin: 3rem;
  padding: 0.1rem;
  padding-bottom: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 360px) {
    width: 90vw;
  }
`;
const ContainerEdit = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 13rem;
  text-align: center;
  background-color: var(--primaryColor);
  color: var(--white);
  margin: 1.2rem;
  padding: 0.1rem;
  padding-bottom: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  @media (max-width: 360px) {
    width: 90vw;
  }
`;
const Title = styled.p`
  margin-bottom: 0;
`;
const BtnEdit = styled.button`
  width: 7rem;
  background-color: var(--secondaryColor);
  margin-top: 1.2rem;
`;
const BtnDelete = styled.button`
  width: 7rem;
  background-color: var(--secondaryColor);
`;
const EditBtnEdit = styled.button`
  width: 7rem;
  background-color: var(--secondaryColor);
`;
const EditBtnDelete = styled.button`
  width: 7rem;
  background-color: var(--secondaryColor);
`;
const Input = styled.input`
  margin-top: 0;
  margin: auto;
  width: 70%;
`;

const TypeEditCard = ({ type, setChangeType, ChangeType }) => {
  //State
  const [TypeName, setTypeName] = useState(type.name);
  const [SwitchEdit, setSwitchEdit] = useState(false);
  //Functions
  function editType(slug) {
    const apiEditType = async () => {
      try {
        const response = await fetch(`${API}food_types/${slug}/`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "en",
          },
          body: JSON.stringify({ name: TypeName }),
        });
        const data = await response.json();
        console.log(data);
        setChangeType(true);
        setTimeout(setChangeType(false), 1000);
        setSwitchEdit(false)
      } catch (error) {
        console.log(error);
      }
    };
    apiEditType();
  }
  function deleteType(slug) {
    const apiDeleteType = async () => {
      try {
        const response = await fetch(`${API}food_types/${slug}/`, {
          method: "DELETE",
          headers: {
            "Accept": "application/json",
            "Accept-Language": "en",
          },
        });
        const data = await response.json();
        console.log(data);
        setChangeType(true);
        setTimeout(setChangeType(false), 1000);
      } catch (error) {
        console.log(error);
        setChangeType(true);
        setTimeout(setChangeType(false), 1000);
      }
    };
    apiDeleteType();
  }
  function openEdit() {
    setSwitchEdit(true);
    setChangeType(false);
  }
  function closeEdit() {
    setSwitchEdit(false);
    setTypeName(type.name);
  }

  return (
    <>
      {!SwitchEdit ? (
        <Container>
          <p>{type.name}</p>
          <BtnEdit onClick={() => openEdit()}>Edit</BtnEdit>
          <BtnDelete onClick={() => deleteType(type.slug)}>Delete</BtnDelete>
        </Container>
      ) : (
        <ContainerEdit>
          <Title>{TypeName}</Title>
          <Input
            type="text"
            value={TypeName}
            onChange={(e) => setTypeName(e.target.value)}
          />
          <div>
            <EditBtnEdit onClick={() => editType(type.slug)}>Edit</EditBtnEdit>
            <EditBtnDelete onClick={() => closeEdit()}>Close</EditBtnDelete>
          </div>
        </ContainerEdit>
      )}
    </>
  );
};
export default TypeEditCard;
