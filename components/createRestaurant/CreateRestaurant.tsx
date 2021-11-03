import { useState, useEffect } from 'react';
import Select from 'react-select'
import API from '../../api/api'

const CreateRestaurant = () => {
    
    const [Restaurant, setRestaurant] = useState(
        {
            name:'',
            description:'',
            logo: {},
            food_type: []        
        }
        );
console.log('rest------------------',Restaurant.logo)
        const [FoodTypes, setFoodTypes] = useState([{slug: '', name: ''}]);    

     const foodTypesArr = [];
     FoodTypes.map(type => (
         foodTypesArr.push({
             value: type.slug,
             label: type.name
         })
     ))

        
    
        console.log(FoodTypes);
        useEffect(() => {
            const apiGetTypes = async () => {
                try {
                    const response = await fetch(
                        `${API}food_types/`,
                        {
                            method: "GET",
                            headers: {
                                Accept: "application/json",
                                "Accept-Language": "en",
                            },
                        }
                    );
                    const data = await response.json();
                    setFoodTypes(data);
                } catch (error) {
                    console.log(error);
                }
            }
            apiGetTypes();
        }, [])

    const { name, description, logo } = Restaurant;    

        const updateRestaurant = (e) => {
            setRestaurant({
                ...Restaurant,
                [e.target.name]: e.target.value
            });
        }

        const uploadLogo = (e) => {
            const f = new FormData();
           f.append('logo', e.target.files[0]);
           console.log('---------------------------',f)
            setRestaurant({
                ...Restaurant,
                logo: f
            });
        }

        const updateTypes = (e) => {
            setRestaurant({
                ...Restaurant,
                food_type: e.map(type => type.value)
            });
        }

        const onSubmit = (e) => {
            
            e.preventDefault();

            const  postRestaurant = async () => {
                // const f = new FormData();
                // const restaurantData = {
                //     name,
                //     description,
                //     f.append('logo', logo),
                //     food_type: Restaurant.food_type
                // }
                try {
                    let config = {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Accept-Language": "en",
                      },
                      body: JSON.stringify(Restaurant),
                    };
                    let res = await fetch(`${API}restaurants/`, config);
                    let json = await res.json();
                    console.log('respuest____________________',json);
                  } catch (err) {
                      console.log(err)
                  }
            }
            
            postRestaurant();
        }

    return (
        <form onSubmit={onSubmit}>
            <div>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={name} onChange={updateRestaurant}/>
            </div>
            <div>
            <label htmlFor="">Description</label>
            <input type="text" name='description' value={description} onChange={updateRestaurant}/>
            </div>
            <div>
            <label htmlFor="">Logo</label>
            <input type="file" name='logo'  onChange={uploadLogo}/>
            </div>
            <div>
            <Select 
                options={foodTypesArr}
                name="food_types"
                // value={food_types}
                onChange={(e) => updateTypes(e)}
                isMulti
            />
            </div>
            <input type="submit" />
        </form>
    )
}

export default CreateRestaurant
