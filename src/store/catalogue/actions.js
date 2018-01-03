export const CATALOGUES_REQUESTED = "CATALOGUES_REQUESTED";
export const CATALOGUES_REQUEST_SUCCESS = "CATALOGUES_REQUEST_SUCCESS";
export const CATALOGUES_REQUEST_FAILURE = "CATALOGUES_REQUEST_FAILURE";

export function listCataloguesForProject(projectId) {
    return {
        type: CATALOGUES_REQUESTED,
        projectId
    };

}
export function setCatalogues(catalogues) {
    return {
        type: CATALOGUES_REQUEST_SUCCESS,
        catalogues
    };
}

export function failCataloguesListing() {
    return {
        type: CATALOGUES_REQUEST_FAILURE
    };
}
