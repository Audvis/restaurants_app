import * as t from '../types';
import API from '../../api/api'

export const getRestaurants = (food_type) => (
    async function apiCall(dispatch: Function) {
        try {
            const response = await fetch(
                `${API}restaurants/${food_type}`,
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Accept-Language": "en",
                    },
                }
            );
            const data = await response.json();
            dispatch({
                type: t.GET_RESTAURANTS,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    }
);


export function setFilter(food_type){
    return {
        type: t.SET_FILTER,
        payload: food_type
    }
}
 

