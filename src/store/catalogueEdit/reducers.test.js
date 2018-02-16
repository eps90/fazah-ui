import catalogueEditReducers, {initialState} from "./reducers";
import {addNewCatalogue, addNewCatalogueFailure, addNewCatalogueSuccess} from "./actions";

describe("catalogueEdit reducers", () => {
    it("should return default state", () => {
        const actualState = catalogueEditReducers(undefined, {});
        expect(actualState).toEqual(initialState);
    });

    it("should modify a state when new catalogue action requested", () => {
        const catalogueProperties = {
            name: "New catalogue",
            projectId: "bf89be24-0ce5-4ee9-a07b-0d68b60df562"
        };
        const action = addNewCatalogue(catalogueProperties);

        const expectedState = {
            loading: true,
            error: false,
            properties: catalogueProperties
        };
        const actualState = catalogueEditReducers(initialState, action);

        expect(actualState).toEqual(expectedState);
    });

    it("should modify a state when catalogue change has succeeded", () => {
        const action = addNewCatalogueSuccess();
        const expectedState = {
            loading: false,
            error: false,
            properties: null
        };
        const enteringState = {
            ...initialState,
            loading: true
        };
        const actualState = catalogueEditReducers(enteringState, action);
        expect(actualState).toEqual(expectedState);
    });

    it("should modify a state when catalogue edit has failed", () => {
        const action = addNewCatalogueFailure();
        const expectedState = {
            loading: false,
            error: true,
            properties: null
        };
        const actualState = catalogueEditReducers(initialState, action);
        expect(actualState).toEqual(expectedState);
    });
});