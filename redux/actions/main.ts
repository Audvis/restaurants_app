import * as t from '../types';

export const getRestaurants = () => (
    async function apiCall(dispatch: Function) {
        try {
            const response = await fetch(
                "https://tellurium.behuns.com/api/restaurants/",
                {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
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