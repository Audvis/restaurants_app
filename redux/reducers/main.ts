import * as t from '../types';

//INTERFACE
interface IMainState {
    allRestaurantsState: object[],
}
interface IAction {
    type: string,
    payload: any
}

//INITIAL_STATE
const initialState: IMainState = {
    allRestaurantsState: [],
};

const reducerMain = (state = initialState, action: IAction): IMainState => {
    switch (action.type) {
        case t.GET_RESTAURANTS:
            return {
                ...state,
                allRestaurantsState: action.payload
            };
        default:
            return state;
    }
}

export default reducerMain;