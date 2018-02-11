import React from "react";
import PropTypes from "prop-types";
import ProjectListItem from "./ProjectListItem";
import Project from "../../../model/Project";
import {Dimmer, Icon, List, Loader, Message, Segment} from "semantic-ui-react";
import NewProjectModal from "../new-project/NewProjectModal";

export default class ProjectList extends React.Component {
    static propTypes = {
        listProjects: PropTypes.func.isRequired,
        showProjectCatalogues: PropTypes.func.isRequired,
        loading: PropTypes.bool,
        hasError: PropTypes.bool,
        projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)),
        history: PropTypes.any
    };

    static defaultProps = {
        loading: false,
        projects: []
    };

    componentDidMount() {
        this.props.listProjects();
    }

    render() {
        let message = "";
        if (this.props.hasError) {
            message = (
                <Message negative icon>
                    <Icon name="exclamation triangle" />
                    <Message.Header>Error occurred when fetching projects</Message.Header>
                </Message>
            );
        } else if (!this.props.loading && this.props.projects.length === 0) {
            message = (
                <Message info icon>
                    <Icon name="info" />
                    <Message.Header>No projects to show</Message.Header>
                </Message>
            );
        }

        return (
            <Dimmer.Dimmable as={Segment} padded="very" dimmed={this.props.loading}>
                <Dimmer active={this.props.loading} inverted>
                    <Loader size="big" />
                </Dimmer>

                <List size="large" verticalAlign="middle">
                    <List.Item>
                        <List.Content floated="right">
                            <NewProjectModal />
                        </List.Content>
                    </List.Item>
                </List>

                {message}

                <List selection divided size="large" verticalAlign="middle">
                    {this.props.projects.map(project => (
                        <ProjectListItem onProjectSelected={this.props.showProjectCatalogues} key={project.id} project={project}/>
                    ))}
                </List>
            </Dimmer.Dimmable>
        );
    }
}
