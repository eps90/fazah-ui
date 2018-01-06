import {PROJECT_SELECTED, PROJECTS_REQUEST_FAILURE, PROJECTS_REQUEST_SUCCESS, PROJECTS_REQUESTED} from "./actions";

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
    case PROJECT_SELECTED:
        return {
            ...state,
            selectedProject: state.items.filter(project => project.id === action.projectId)[0] || null
        };
    default:
        return state;
    }
};

export default projects;
