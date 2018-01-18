import React from "react";
import {mount, shallow} from "enzyme";
import ProjectList from "./ProjectList";
import ProjectListItem from "./ProjectListItem";
import Project from "../../../model/Project";
import {Dimmer, Message} from "semantic-ui-react";

describe("ProjectList component", () => {
    it("should render a list of provided projects", () => {
        const projects = getProjectsList();
        const component = createComponentUnderTest({projects});
        const wrapper = shallow(component);
        expect(wrapper.find(ProjectListItem)).toHaveLength(2);
    });

    it("should show a message when no projects are found", () => {
        const projects = [];
        const component = createComponentUnderTest({projects});
        const wrapper = shallow(component);
        expect(wrapper.find(Message)).toHaveLength(1);
    });

    it("should show a spinner when projects are loading", () => {
        const isLoading = true;
        const component = createComponentUnderTest({loading: isLoading});

        const wrapper = shallow(component);

        expect(wrapper.find(Dimmer).first().props().active).toBe(true);
    });

    it("should call list projects function on mount", () => {
        expect.assertions(1);

        const listProjectsFn = jest.fn();
        const projects = [];
        const component = createComponentUnderTest({projects, listProjects: listProjectsFn});
        mount(component);

        expect(listProjectsFn).toHaveBeenCalled();
    });

    it("should show a message when error occurs", () => {
        expect.assertions(2);

        const component = createComponentUnderTest({hasError: true});
        const wrapper = mount(component);

        const messageElement = wrapper.find(Message);
        expect(messageElement).toHaveLength(1);
        expect(messageElement.props().negative).toBe(true);
    });

    function getProjectsList() {
        return [
            new Project("id1", "Project 1"),
            new Project("id2", "Project 2")
        ];
    }

    function createComponentUnderTest(targetValues) {
        const {
            listProjects = jest.fn(),
            showProjectCatalogues = jest.fn(),
            projects = [],
            hasError = false,
            loading = false
        } = targetValues;
        return <ProjectList listProjects={listProjects} showProjectCatalogues={showProjectCatalogues}
            projects={projects} hasError={hasError} loading={loading}/>;
    }
});
