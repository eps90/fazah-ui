import React from "react";
import PropTypes from "prop-types";
import Project from "../../../model/Project";
import {List} from "semantic-ui-react";

export default class ProjectListItem extends React.Component {
    static propTypes = {
        project: PropTypes.instanceOf(Project).isRequired,
        onProjectSelected: PropTypes.func.isRequired,
        history: PropTypes.any
    };

    getCataloguesLink() {
        return `/projects/${this.props.project.id}/catalogues`;
    }

    openProject() {
        this.props.onProjectSelected(this.props.project.id);
        this.props.history.push(this.getCataloguesLink());
    }

    render() {
        return (
            <List.Item onClick={this.openProject.bind(this)}>
                <List.Header as="a">{this.props.project.name}</List.Header>
            </List.Item>
        );
    }
}
