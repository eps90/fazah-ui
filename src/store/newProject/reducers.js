import {
    ADD_NEW_PROJECT_FAILURE,
    ADD_NEW_PROJECT_REQUESTED, ADD_NEW_PROJECT_SUCCESS
} from "./actions";

export const initialState = {
    loading: false,
    error: false,
    properties: null
};

const newProject = (state = initialState, action) => {
    switch (action.type) {
    case ADD_NEW_PROJECT_REQUESTED:
        return {
            ...state,
            loading: true,
            error: false,
            properties: action.properties
        };
    case ADD_NEW_PROJECT_SUCCESS:
        return {
            ...state,
            loading: false,
            error: false,
            properties: null,
        };
    case ADD_NEW_PROJECT_FAILURE:
        return {
            ...state,
            loading: false,
            error: true,
            properties: null
        };
    default:
        return state;
    }
};

export default newProject;
