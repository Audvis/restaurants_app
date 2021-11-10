import { useState } from "react";
import API from "../../api/api"

const CreateType = () => {
  const [Type, setType] = useState({ name: "" });
  const { name } = Type

  function updateType(e) {
    setType({ name: e.target.value })
  }

  function onSubmitType(){
    const apiPost = async () => {
        try {
            const type = await fetch(`${API}food_types/`, {
                method: "POST",
                headers: {
                 Accept: "application/json",
                 "Content-Type": "application/json",
                  "Accept-Language": "en",
                },
                body: JSON.stringify(Type),
              });
              const data = await type.json();
              console.log(data);
        } catch (error) {
            console.log(error)
        }
            
        }
        apiPost();
      };
        
  

  return (
    <>
      <div>
        <label htmlFor="">Type</label>
        <input type="text" name="name" onChange={updateType} value={name}/>
        <button onClick={onSubmitType}>Create</button>
      </div>
    </>
  );
};

export default CreateType;
