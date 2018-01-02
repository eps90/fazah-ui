import React from "react";

export default class ProjectListItem extends React.Component {
    render() {
        return (
            <span className='project-list-item'>{this.props.project.name}</span>
        );
    }
}
