import React from "react";
import configureStore from "redux-mock-store";
import {mount} from "enzyme";
import NewProject from "../../components/project/new-project/NewProject";
import {Provider} from "react-redux";
import NewProjectContainer from "./NewProjectContainer";

describe("NewProjectContainer component", () => {
    const mockStore = configureStore();

    beforeEach(() => {
        jest.resetModules();
    });

    it("should create a NewProject component", () => {
        const wrapper = mount(createComponentUnderTest());
        wrapper.update();

        expect(wrapper.find(NewProject)).toHaveLength(1);
    });

    it("should pass loading state to the NewProject component", () => {
        const wrapper = mount(createComponentUnderTest({loading: true}));

        expect(wrapper.find(NewProject).prop("loading")).toBe(true);
    });

    it("should pass addNewProject action to the NewProject component", () => {
        const wrapper = mount(createComponentUnderTest());

        expect(wrapper.find(NewProject).prop("addNewProject")).toBeDefined();
    });

    it("should pass error state to the NewProject component", () => {
        const wrapper = mount(createComponentUnderTest({error: true}));

        expect(wrapper.find(NewProject).prop("error")).toBe(true);
    });

    function createComponentUnderTest(properties = {}) {
        const {loading = false, error = false, languages = []} = properties;
        const initialStore = {
            newProject: {
                loading,
                error
            }
        };
        const store = mockStore(initialStore);

        jest.doMock("../../service/languages/getLanguagesForDropdown", () => {
            return function () {
                return languages;
            };
        });

        return (
            <Provider store={store}>
                <NewProjectContainer />
            </Provider>
        );
    }
});