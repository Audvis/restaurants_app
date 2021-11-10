import { useState } from 'react';
import API from '../../api/api'

const TypeEditCard = ( { type } ) => {


    const [TypeName, setTypeName] = useState(type.name);
    const [SwitchEdit, setSwitchEdit] = useState(false);

    function editType(slug){
        console.log(slug)
        const apiEditType = async () => {
            try {
                const response = await fetch(`${API}food_types/${slug}/`,{
                    method: 'PUT',
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Accept-Language": "en",
                      },
                      body: JSON.stringify({name:TypeName})        
                });
                const data = await response.json();
                console.log(data)    
            } catch (error) {
                console.log(error)
            }
        }
        apiEditType();
    }

    function deleteType(slug) {
        const apiDeleteType = async () => {
          try {
            const response = await fetch(`${API}food_types/${slug}/`, {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Accept-Language": "en",
              },
            });
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        };
        apiDeleteType();
      }

    return (
        <>
        {!SwitchEdit ? <>
            <p>{type.name}</p>
            <button onClick={() => setSwitchEdit(true)}>e</button>
            <button onClick={() => deleteType(type.slug)}>x</button>
        </>:
        <>
            <input type="text" value={TypeName} onChange={(e) => setTypeName(e.target.value)}/>
            <button onClick={() => editType(type.slug)}>edit</button>
            <button onClick={() => setSwitchEdit(false)}>X</button>
            
        </>
        }
            
        </>
    )
}
export default TypeEditCard;
