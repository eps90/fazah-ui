import {
    PROJECT_SELECTION_FAIL,
    PROJECT_SELECTION_REQUESTED, PROJECT_SELECTION_SUCCESS, PROJECTS_REQUEST_FAILURE, PROJECTS_REQUEST_SUCCESS,
    PROJECTS_REQUESTED, SHOW_PROJECT_CATALOGUES
} from "./actions";

export const initialState = {
    loading: false,
    items: [],
    error: false,
    selectedProject: null
};

const projects = (state = initialState, action) => {
    switch (action.type) {
    case PROJECTS_REQUESTED:
        return {
            ...state,
            loading: true,
            error: false,
            items: []
        };
    case PROJECTS_REQUEST_SUCCESS:
        return {
            ...state,
            loading: false,
            error: false,
            items: action.projects
        };
    case PROJECTS_REQUEST_FAILURE:
        return {
            ...state,
            loading: false,
            items: [],
            error: true
        };
    case PROJECT_SELECTION_REQUESTED:
        return {
            ...state,
            loading: true,
            error: false,
            selectedProject: null
        };
    case PROJECT_SELECTION_SUCCESS:
        return {
            ...state,
            loading: false,
            error: false,
            selectedProject: action.selectedProject
        };
    case PROJECT_SELECTION_FAIL:
        return {
            ...state,
            loading: false,
            error: true,
            selectedProject: null
        };
    case SHOW_PROJECT_CATALOGUES:
        return {
            ...state,
            loading: false,
            error: false,
            selectedProject: null
        };
    default:
        return state;
    }
};

export default projects;
