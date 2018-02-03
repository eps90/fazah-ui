export const PROJECTS_REQUESTED = "PROJECTS_REQUESTED";
export const PROJECTS_REQUEST_SUCCESS = "PROJECTS_REQUEST_SUCCESS";
export const PROJECTS_REQUEST_FAILURE = "PROJECTS_REQUEST_FAILURE";
export const PROJECT_SELECTION_REQUESTED = "PROJECT_SELECTION_REQUESTED";
export const PROJECT_SELECTION_SUCCESS = "PROJECT_SELECTION_SUCCESS";
export const PROJECT_SELECTION_FAIL = "PROJECT_SELECTION_FAIL";
export const SHOW_PROJECT_CATALOGUES = "SHOW_PROJECT_CATALOGUES";
export const ADD_NEW_PROJECT_REQUESTED = "ADD_NEW_PROJECT_REQUESTED";
export const ADD_NEW_PROJECT_SUCCESS = "ADD_NEW_PROJECT_SUCCESS";
export const ADD_NEW_PROJECT_FAILURE = "ADD_NEW_PROJECT_FAILURE";

export function listProjects() {
    return {
        type: PROJECTS_REQUESTED
    };
}

export function setProjects(projects) {
    return {
        type: PROJECTS_REQUEST_SUCCESS,
        projects
    };
}

export function failProjectListing() {
    return {
        type: PROJECTS_REQUEST_FAILURE
    };
}

export function selectProject(projectId) {
    return {
        type: PROJECT_SELECTION_REQUESTED,
        projectId
    };
}

export function selectProjectSuccess(selectedProject) {
    return {
        type: PROJECT_SELECTION_SUCCESS,
        selectedProject
    };
}

export function selectProjectFailure() {
    return {
        type: PROJECT_SELECTION_FAIL
    };
}

export function showProjectCatalogues(projectId) {
    return {
        type: SHOW_PROJECT_CATALOGUES,
        projectId
    };
}

export function addNewProject(newProjectProperties) {
    return {
        type: ADD_NEW_PROJECT_REQUESTED,
        newProjectProperties
    };
}

export function addingProjectSuccess() {
    return {
        type: ADD_NEW_PROJECT_SUCCESS
    };
}

export function addingProjectFailure() {
    return {
        type: ADD_NEW_PROJECT_FAILURE
    };
}