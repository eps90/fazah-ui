import React from "react";
import PropTypes from "prop-types";
import Project from "../../../model/Project";

export default class ProjectListItem extends React.Component {
    static propTypes = {
        project: PropTypes.instanceOf(Project).isRequired
    };

    render() {
        return (
            <span className='project-list-item'>{this.props.project.name}</span>
        );
    }
}
