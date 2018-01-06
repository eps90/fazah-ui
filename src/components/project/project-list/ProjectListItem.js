import React from "react";
import PropTypes from "prop-types";
import Project from "../../../model/Project";
import {List} from "semantic-ui-react";

export default class ProjectListItem extends React.Component {
    static propTypes = {
        project: PropTypes.instanceOf(Project).isRequired
    };

    render() {
        return (
            <List.Header>{this.props.project.name}</List.Header>
        );
    }
}
