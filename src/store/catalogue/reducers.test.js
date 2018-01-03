import catalogueReducers, {initialState} from "./reducers";
import {failCataloguesListing, listCataloguesForProject, setCatalogues} from "./actions";
import Catalogue from "../../model/Catalogue";

describe("Catalogue reducers", () => {
    it("should have initial state", () => {
        const state = catalogueReducers(undefined, {});
        expect(state).toEqual(initialState);
    });

    it("should set loading state when fetching catalogues", () => {
        const projectId = 123;
        const action = listCataloguesForProject(projectId);

        const expectedState = {
            ...initialState,
            projectId,
            loading: true,
            error: false,
            items: []
        };
        const actualState = catalogueReducers(initialState, action);

        expect(actualState).toEqual(expectedState);
    });

    it("should set catalogues", () => {
        const catalogues = [
            new Catalogue("1231", "first catalogue"),
            new Catalogue("3213", "second catalogue"),
        ];
        const action = setCatalogues(catalogues);

        const expectedState = {
            ...initialState,
            loading: false,
            items: catalogues,
            projectId: null
        };
        const actualState = catalogueReducers(initialState, action);

        expect(actualState).toEqual(expectedState);
    });

    it("should set an error when fetching projects fails", () => {
        const action = failCataloguesListing();

        const expectedState = {
            ...initialState,
            loading: false,
            items: [],
            error: true,
            projectId: null
        };
        const actualState = catalogueReducers(initialState, action);

        expect(actualState).toEqual(expectedState);
    });
});
