import {ADD_CATALOGUE_FAILURE, ADD_CATALOGUE_REQUEST, ADD_CATALOGUE_SUCCESS} from "./actions";

export const initialState = {
    loading: false,
    error: false,
    properties: null
};

export default function catalogueEditReducers(state = initialState, action) {
    switch (action.type) {
    case ADD_CATALOGUE_REQUEST:
        return {
            ...initialState,
            loading: true,
            error: false,
            properties: action.properties
        };
    case ADD_CATALOGUE_SUCCESS:
        return {
            ...initialState,
            loading: false,
            error: false,
            properties: null
        };
    case ADD_CATALOGUE_FAILURE:
        return {
            ...initialState,
            loading: false,
            error: true,
            properties: null
        };
    default:
        return state;
    }
}