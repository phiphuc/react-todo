import { ADD_DATA , EDIT_DATA} from '../actions/index';
import { data } from '../data/data';
const formInitialState = data;
const form = (state = formInitialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return [...state, {...action.payload, id: state.length + 1}];
        case EDIT_DATA:
            return editData(state, action);
        default:
            return state
    }
}

function editData(state, action){
    const data = state.map(item =>{
        return  item.id == action.payload.id ? action.payload : item;
    });
    return data;
}

export default form;