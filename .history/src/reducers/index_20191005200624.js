import { ADD_DATA, EDIT_DATA, EDIT_ACTION, DELETE_ACTION } from '../actions/index';
import { data } from '../data/data';
const formInitialState = {data: data, edit: false, editData: {title: '', message: '', id:''}};
const form = (state = formInitialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {...state, data:[...state.data, {...action.payload, id: state.data.length + 1}]}; 
        case EDIT_DATA:
            return {...state, data: state.data.map(item => item.id === action.payload.id ? action.payload: item ),  edit: f};
        case EDIT_ACTION:
            return {...state, editData: action.payload, edit: true };
        default:
            return state
    }
}

export default form;