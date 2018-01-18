import React from "react";
import ProjectListItem from "./ProjectListItem";
import Project from "../../../model/Project";
import {mount, shallow} from "enzyme";
import Metadata from "../../../model/Metadata";
import {Flag} from "semantic-ui-react";

describe("ProjectListItem component", () => {
    it("should display a project name", () => {
        const projectName = "My new project";
        const project = new Project("321321", projectName);
        const component = createComponentUnderTest({project});
        const wrapper = shallow(component);

        expect(wrapper.html()).toContain(projectName);
    });

    it("it should show last modified date", () => {
        const updatedAt = new Date("2012-01-01");
        const metadata = new Metadata(null, updatedAt, true);
        const project = new Project("312312", "My project", metadata);
        const component = createComponentUnderTest({project});
        const wrapper = shallow(component);

        expect(wrapper.html()).toContain("Last modified: ");
    });

    it("should contain flags of available languages", () => {
        const availableLanguages = ["fr", "pl"];
        const project = new Project("321312", "My project", Metadata.empty(), availableLanguages);
        const component = createComponentUnderTest({project});
        const wrapper = mount(component);

        expect(wrapper.find(Flag)).toHaveLength(2);
        expect(wrapper.find(Flag).at(0).props().name).toEqual("fr");
        expect(wrapper.find(Flag).at(1).props().name).toEqual("pl");
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

        return <ProjectListItem project={project} onProjectSelected={onProjectSelected} />;
    }
});
