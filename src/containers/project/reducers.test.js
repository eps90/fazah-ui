import projectsReducer, {initialState} from './reducers';
import {failProjectListing, listProjects, setProjects} from "./actions";

describe('project reducer', () => {
    it('should return initial state', () => {
        const state = projectsReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    it('should be set state to loading when fetching projects', () => {
        const action = listProjects();
        const expectedState = {
            ...initialState,
            items: [],
            loading: true,
        };
        const actualState = projectsReducer(initialState, action);

        expect(actualState).toEqual(expectedState);
    });

    it('should set fetched projects', () => {
        const projects = [
            {id: 1, name: 'My first project'},
            {id: 2, name: 'My second project'}
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

    it('should set error state when project fetching fails', () => {
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
});
