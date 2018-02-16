export const ADD_CATALOGUE_REQUEST = "ADD_CATALOGUE_REQUEST";
export const ADD_CATALOGUE_SUCCESS = "ADD_CATALOGUE_SUCCESS";
export const ADD_CATALOGUE_FAILURE = "ADD_CATALOGUE_FAILURE";

export function addNewCatalogue(catalogueProperties) {
    return {
        type: ADD_CATALOGUE_REQUEST,
        properties: catalogueProperties
    };
}

export function addNewCatalogueSuccess() {
    return {
        type: ADD_CATALOGUE_SUCCESS
    };
}

export function addNewCatalogueFailure() {
    return {
        type: ADD_CATALOGUE_FAILURE
    };
}