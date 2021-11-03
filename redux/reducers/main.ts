import * as t from '../types';

//INTERFACE
interface IMainState {
    allRestaurantsState: object[],
    filterState: string
}
interface IAction {
    type: string,
    payload: any
}

//INITIAL_STATE
const initialState: IMainState = {
    allRestaurantsState: [],
    filterState: '',
};

const reducerMain = (state = initialState, action: IAction): IMainState => {
    switch (action.type) {
        case t.GET_RESTAURANTS:
            return {
                ...state,
                allRestaurantsState: action.payload
            };

            case t.SET_FILTER:
                return {
                    ...state,
                    filterState: action.payload
                };    


        default:
            return state;
    }
}

export default reducerMain;