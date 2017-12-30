import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import ProjectList from "../../components/main/project-list/ProjectList";
import ProjectListContainer from "./ProjectListContainer";
import {mount} from "enzyme";

describe('ProjectListContainer', () => {
    const mockStore = configureStore();

    it('should render a ProjectList component with projects', () => {
        const projects = [
            {id: 1, name: 'My first project'},
            {id: 2, name: 'My second project'},
        ];
        const component = createComponentWithState(projects);

        const wrapper = mount(component);
        expect(wrapper.find(ProjectList).first().props().projects).toEqual(projects);
    });

    it('should pass request action to ProjectList component', () => {
        jest.doMock("../../store/project/actions", {
            listProjects: jest.fn()
        });

        const component = createComponentWithState();
        const wrapper = mount(component);

        expect(wrapper.find(ProjectList).first().props().listProjects).toBeDefined();
    });

    it('it should pass loading state to ProjectList component', () => {
        const isLoading = true;
        const component = createComponentWithState([], isLoading);
        const wrapper = mount(component);

         expect(wrapper.find(ProjectList).first().props().loading).toBeTruthy();
    });

    function createComponentWithState(items = [], loading = false) {
        const initialState = {
            projects: {
                loading,
                items
            }
        };
        const store = mockStore(initialState);

        return (
            <Provider store={store}>
                <ProjectListContainer/>
            </Provider>
        );
    }
});
