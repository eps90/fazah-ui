import projectsReducer, {initialState} from "./reducers";
import {failProjectListing, listProjects, selectProject, setProjects} from "./actions";

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

    it("should be able to select a project", () => {
        const projectId = "123123";
        const action = selectProject(projectId);
        const currentState = {
            ...initialState,
            items: [
                {
                    id: projectId,
                    name: "My first project"
                },
                {
                    id: "32123212",
                    name: "Do not select this"
                }
            ]
        };
        const expectedState = {
            ...currentState,
            selectedProject: {
                id: projectId,
                name: "My first project"
            }
        };
        const actualState = projectsReducer(currentState, action);

        expect(expectedState).toEqual(actualState);
    });

    it("should set selected project to null when no project has been found", () => {
        const projectId = "123123";
        const action = selectProject(projectId);
        const currentState = {
            ...initialState,
            items: [
                {
                    id: "555555",
                    name: "My first project"
                },
                {
                    id: "32123212",
                    name: "Do not select this"
                }
            ]
        };
        const expectedState = {
            ...currentState,
            selectedProject: null
        };
        const actualState = projectsReducer(currentState, action);

        expect(expectedState).toEqual(actualState);
    });
});
