import React from 'react';
import {shallow} from "enzyme";
import ProjectList from "../../../../src/components/main/project-list/ProjectList";
import ProjectListItem from "../../../../src/components/main/project-list/ProjectListItem";
import Project from "../../../../src/model/Project";
import Message from "../../../../src/components/main/message/Message";

describe('ProjectList component', () => {
    test('should render a list of provided projects', () => {
        const projects = [
            new Project('id1', 'Project 1'),
            new Project('id2', 'Project 2')
        ];
        const wrapper = shallow(<ProjectList projects={projects} />);
        expect(wrapper.find(ProjectListItem)).toHaveLength(2);
    });

    test('should show a message when no projects are found', () => {
        const projects = [];
        const wrapper = shallow(<ProjectList projects={projects}/>);
        expect(wrapper.find(Message)).toHaveLength(1);
    });
});
