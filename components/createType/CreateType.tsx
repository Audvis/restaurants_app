import { useState } from "react";
import API from "../../api/api"

const CreateType = ( { setChangeType, ChangeType } ) => {
  const [Type, setType] = useState({ name: "" });
  const { name } = Type

  function updateType(e) {
    setType({ name: e.target.value })
    setChangeType(false)
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
              setChangeType(true);
              setTimeout(setChangeType(false), 1000);
        } catch (error) {
            console.log(error)
        }
        }
        apiPost();
        setType({ name: "" });
      };
        
  

  return (
    <>
      <div>
        <input type="text" name="name" onChange={updateType} value={name}/>
        <button onClick={onSubmitType}>Create</button>
      </div>
    </>
  );
};

export default CreateType;
