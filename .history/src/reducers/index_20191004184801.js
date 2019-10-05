import { ADD_DATA } from '../actions/index';
import { data } from '../data/data';
const formInitialState = data;
const form = (state = formInitialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return [...state, {...action.payload, id: state.length + 1}];
        default:
            return state
    }
}

export default form;