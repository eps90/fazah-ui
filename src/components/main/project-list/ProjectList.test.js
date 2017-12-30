import React from 'react';
import {mount, shallow} from "enzyme";
import ProjectList from "./ProjectList";
import ProjectListItem from "./ProjectListItem";
import Project from "../../../model/Project";
import Message from "../message/Message";

describe('ProjectList component', () => {
    it('should render a list of provided projects', () => {
        const projects = [
            new Project('id1', 'Project 1'),
            new Project('id2', 'Project 2')
        ];
        const listProjectsFn = jest.fn();
        const wrapper = shallow(<ProjectList projects={projects} listProjects={listProjectsFn} />);
        expect(wrapper.find(ProjectListItem)).toHaveLength(2);
    });

    it('should show a message when no projects are found', () => {
        const projects = [];
        const listProjectsFn = jest.fn();
        const wrapper = shallow(<ProjectList projects={projects} listProjects={listProjectsFn} />);
        expect(wrapper.find(Message)).toHaveLength(1);
    });

    it('should call list projects function on mount', () => {
        expect.assertions(1);

        const listProjectsFn = jest.fn();
        const projects = [];
        mount(<ProjectList projects={projects} listProjects={listProjectsFn} />);

        expect(listProjectsFn).toHaveBeenCalled();
    });
});
