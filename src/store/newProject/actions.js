export const ADD_NEW_PROJECT_REQUESTED = "ADD_NEW_PROJECT_REQUESTED";
export const ADD_NEW_PROJECT_SUCCESS = "ADD_NEW_PROJECT_SUCCESS";
export const ADD_NEW_PROJECT_FAILURE = "ADD_NEW_PROJECT_FAILURE";

export function addNewProject(properties) {
    return {
        type: ADD_NEW_PROJECT_REQUESTED,
        properties
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