import {addingProjectFailure, addingProjectSuccess, addNewProject} from "./actions";
import newProjectReducer, {initialState} from "./reducers";

describe("Creating a project", () => {
    it("should set state on addNewProject reducer", () => {
        const action = addNewProject({name: "My project"});
        const expectedState = {
            ...initialState,
            error: false,
            loading: true,
            properties: {
                name: "My project"
            }
        };
        const actualState = newProjectReducer(initialState, action);

        expect(actualState).toEqual(expectedState);
    });

    it("should set state on addingProjectSuccess", () => {
        const action = addingProjectSuccess();
        const expectedState = {
            ...initialState,
            error: false,
            loading: false,
            properties: null
        };
        const actualState = newProjectReducer(initialState, action);

        expect(actualState).toEqual(expectedState);
    });

    it("should set state on addingProjectFailure", () => {
        const action = addingProjectFailure();
        const expectedState = {
            ...initialState,
            error: true,
            loading: false,
            properties: null
        };
        const actualState = newProjectReducer(initialState, action);
        expect(actualState).toEqual(expectedState);
    });
});