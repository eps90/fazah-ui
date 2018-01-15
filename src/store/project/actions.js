export const PROJECTS_REQUESTED = "PROJECTS_REQUESTED";
export const PROJECTS_REQUEST_SUCCESS = "PROJECTS_REQUEST_SUCCESS";
export const PROJECTS_REQUEST_FAILURE = "PROJECTS_REQUEST_FAILURE";
export const PROJECT_SELECTION_REQUESTED = "PROJECT_SELECTION_REQUESTED";
export const PROJECT_SELECTION_SUCCESS = "PROJECT_SELECTION_SUCCESS";
export const PROJECT_SELECTION_FAIL = "PROJECT_SELECTION_FAIL";

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
