import React from 'react';
import {mount, shallow} from "enzyme";
import ProjectList from "./ProjectList";
import ProjectListItem from "./ProjectListItem";
import Project from "../../../model/Project";
import Message from "../../main/message/Message";
import Spinner from "../../Spinner";

describe('ProjectList component', () => {
    it('should render a list of provided projects', () => {
        const projects = getProjectsList();
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

    it('should show a spinner when projects are loading', () => {
        const projects = [];
        const listProjectsFn = jest.fn();
        const isLoading = true;

        const wrapper = shallow(<ProjectList projects={projects} listProjects={listProjectsFn} loading={isLoading} />);

        expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it('should call list projects function on mount', () => {
        expect.assertions(1);

        const listProjectsFn = jest.fn();
        const projects = [];
        mount(<ProjectList projects={projects} listProjects={listProjectsFn} />);

        expect(listProjectsFn).toHaveBeenCalled();
    });

    it('should show a message when error occurs', () => {
        expect.assertions(2);

        const listProjectsFn = jest.fn();
        const projects = [];
        const wrapper = mount(<ProjectList projects={projects} listProjects={listProjectsFn} hasError={true} />);

        const messageElement = wrapper.find(Message);
        expect(messageElement).toHaveLength(1);
        expect(messageElement.props().status).toEqual('critical');
    });

    function getProjectsList() {
        return [
            new Project('id1', 'Project 1'),
            new Project('id2', 'Project 2')
        ];
    }
});
