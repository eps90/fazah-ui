export const PROJECTS_REQUESTED = "PROJECTS_REQUESTED";
export const PROJECTS_REQUEST_SUCCESS = "PROJECTS_REQUEST_SUCCESS";
export const PROJECTS_REQUEST_FAILURE = "PROJECTS_REQUEST_FAILURE";

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
