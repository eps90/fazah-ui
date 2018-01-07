import React from "react";
import PropTypes from "prop-types";
import Project from "../../../model/Project";
import {Flag, List} from "semantic-ui-react";
import moment from "moment";

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
        const updatedAtFormatted = moment(this.props.project.metadata.updatedAt).fromNow();
        const desc = `Last modified: ${updatedAtFormatted}`;
        const flags = this.props.project.availableLanguages.map(lang => (
            <Flag key={lang} name={lang} />
        ));

        return (
            <List.Item onClick={this.openProject.bind(this)}>
                <List.Content floated="right">
                    {flags}
                </List.Content>
                <List.Content>
                    <List.Header as="a">{this.props.project.name}</List.Header>
                    <List.Description>
                        <span>{desc}</span>
                    </List.Description>
                </List.Content>
            </List.Item>
        );
    }
}
