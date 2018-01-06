import React from "react";
import PropTypes from "prop-types";
import Project from "../../../model/Project";
import {List} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class ProjectListItem extends React.Component {
    static propTypes = {
        project: PropTypes.instanceOf(Project).isRequired
    };

    getCataloguesLink() {
        return `/projects/${this.props.project.id}/catalogues`;
    }

    render() {
        return (
            <List.Header as={Link} to={this.getCataloguesLink()}>{this.props.project.name}</List.Header>
        );
    }
}
