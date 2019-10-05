import { ADD_DATA , EDIT_DATA, FILL_DATA} from '../actions/index';
import { data } from '../data/data';
const formInitialState = { data:data, fillData: {}, edit: false};
const form = (state = formInitialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            const temp = { ...state };
            temp.data = [...state, {...action.payload, id: state.length + 1}];
            return temp;
        case EDIT_DATA:
            return state.map(item =>item.id == action.payload.id ? action.payload : item);
        case FILL_DATA:
            return;
        default:
            return state
    }
}

export default form;