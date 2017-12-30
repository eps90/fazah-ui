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
        const component = createComponentWithProjects(projects);

        const wrapper = mount(component);
        expect(wrapper.find(ProjectList).first().props().projects).toEqual(projects);
    });

    it('should pass request action to ProjectList component', () => {
        jest.doMock("../../store/project/actions", {
            listProjects: jest.fn()
        });

        const component = createComponentWithProjects();
        const wrapper = mount(component);

        expect(wrapper.find(ProjectList).first().props().listProjects).toBeDefined();
    });

    function createComponentWithProjects(projects = []) {
        const initialState = {
            projects: {
                items: projects
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
