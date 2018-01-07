import React from "react";
import ProjectListItem from "./ProjectListItem";
import Project from "../../../model/Project";
import {mount, shallow} from "enzyme";
import {MemoryRouter, Route} from "react-router-dom";

describe("ProjectListItem component", () => {
    it("should display a project name", () => {
        const projectName = "My new project";
        const project = new Project("321321", projectName);
        const component = createComponentUnderTest({project});
        const wrapper = shallow(component);

        expect(wrapper.html()).toContain(projectName);
    });

    it("should redirect to catalogues route on click", () => {
        const projectId = "321321";
        const project = new Project(projectId, "This is my project");
        const component = createComponentUnderTest({project});
        const wrapper = mount(component);
        wrapper.update();
        wrapper.simulate("click");

        const location = wrapper.find(ProjectListItem).props().location;
        const expectedPath = `/projects/${projectId}/catalogues`;

        expect(location.pathname).toEqual(expectedPath);
    });

    it("should call passed action", () => {
        const projectId = "321312";
        const project = new Project(projectId, "My awesome project");
        const onProjectSelected = jest.fn();
        const component = createComponentUnderTest({project, onProjectSelected});
        const wrapper = mount(component);
        wrapper.update();
        wrapper.simulate("click");

        expect(onProjectSelected).toHaveBeenCalledWith(projectId);
    });

    function createComponentUnderTest(params) {
        const {project, onProjectSelected = jest.fn()} = params;

        return (
            <MemoryRouter>
                <Route render={(props) => (
                    <ProjectListItem project={project} onProjectSelected={onProjectSelected} {...props} />
                )} />
            </MemoryRouter>
        );
    }
});
