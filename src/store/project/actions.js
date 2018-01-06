export const PROJECTS_REQUESTED = "PROJECTS_REQUESTED";
export const PROJECTS_REQUEST_SUCCESS = "PROJECTS_REQUEST_SUCCESS";
export const PROJECTS_REQUEST_FAILURE = "PROJECTS_REQUEST_FAILURE";
export const PROJECT_SELECTED = "PROJECT_SELECTED";

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
        type: PROJECT_SELECTED,
        projectId
    };
}
