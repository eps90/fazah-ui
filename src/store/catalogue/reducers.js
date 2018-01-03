import {CATALOGUES_REQUEST_FAILURE, CATALOGUES_REQUEST_SUCCESS, CATALOGUES_REQUESTED} from "./actions";

export const initialState = {
    loading: false,
    items: [],
    error: false,
    projectId: null
};

const catalogueReducers = (state = initialState, action) => {
    switch (action.type) {
    case CATALOGUES_REQUESTED:
        return {
            ...state,
            projectId: action.projectId,
            loading: true
        };
    case CATALOGUES_REQUEST_SUCCESS:
        return {
            ...state,
            loading: false,
            projectId: null,
            items: action.catalogues
        };
    case CATALOGUES_REQUEST_FAILURE:
        return {
            ...state,
            loading: false,
            error: true,
            items: [],
            projectId: null
        };
    default:
        return state;
    }
};

export default catalogueReducers;
