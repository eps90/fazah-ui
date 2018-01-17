import projectsReducer, {initialState} from "./reducers";
import {
    failProjectListing, listProjects, selectProject, selectProjectFailure, selectProjectSuccess,
    setProjects, showProjectCatalogues
} from "./actions";

describe("project reducer", () => {
    it("should return initial state", () => {
        const state = projectsReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    it("should be set state to loading when fetching projects", () => {
        const action = listProjects();
        const expectedState = {
            ...initialState,
            items: [],
            loading: true,
        };
        const actualState = projectsReducer(initialState, action);

        expect(actualState).toEqual(expectedState);
    });

    it("should set fetched projects", () => {
        const projects = [
            {id: 1, name: "My first project"},
            {id: 2, name: "My second project"}
        ];
        const action = setProjects(projects);

        const expectedState = {
            ...initialState,
            items: projects,
            loading: false
        };
        const actualState = projectsReducer(initialState, action);

        expect(actualState).toEqual(expectedState);
    });

    it("should set error state when project fetching fails", () => {
        const action = failProjectListing();
        const expectedState = {
            ...initialState,
            items: [],
            error: true,
            loading: false
        };
        const actualState = projectsReducer(initialState, action);

        expect(actualState).toEqual(expectedState);
    });

    describe("Project selection", () => {
        it("should be able to request for project selection", () => {
            const projectId = "123123";
            const action = selectProject(projectId);
            const expectedState = {
                ...initialState,
                selectedProject: null,
                loading: true,
                error: false
            };
            const actualState = projectsReducer(initialState, action);

            expect(expectedState).toEqual(actualState);
        });

        it("it should set projects on success", () => {
            const project = {id: "1231", name: "My awesome project"};
            const action = selectProjectSuccess(project);
            const expectedState = {
                ...initialState,
                selectedProject: project,
                loading: false,
                error: false
            };
            const actualState = projectsReducer(initialState, action);

            expect(actualState).toEqual(expectedState);
        });

        it("it should set an error when selecting projects fails", () => {
            const action = selectProjectFailure();
            const expectedState = {
                ...initialState,
                selectedProject: null,
                loading: false,
                error: true
            };
            const actualState = projectsReducer(initialState, action);

            expect(actualState).toEqual(expectedState);
        });

        it("should open catalogues for projects", () => {
            const projectId = "123123";
            const action = showProjectCatalogues(projectId);
            const expectedState = {
                ...initialState,
                selectedProject: null,
                loading: false,
                error: false
            };
            const actualState = projectsReducer(initialState, action);

            expect(actualState).toEqual(expectedState);
        });
    });
});
