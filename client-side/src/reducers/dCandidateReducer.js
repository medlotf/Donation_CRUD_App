import { CREATE, UPDATE, DELETE, FETCH_ALL } from "./../actions/Constants";

const initialState = {
    list: []
};

export const dCandidateReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            };
        case CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case UPDATE:
            return {
                ...state,
                list: state.list.map((x) =>
                    x.id === action.payload.id ? action.payload : x
                )
            };
        case DELETE:
            return {
                ...state,
                list: state.list.filter((x) => x.id !== action.payload.id)
            };
        default:
            return state;
    }
};
