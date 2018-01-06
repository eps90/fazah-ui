import React from "react";
import PropTypes from "prop-types";
import ProjectListItem from "./ProjectListItem";
import Project from "../../../model/Project";
import {Dimmer, Icon, List, Loader, Message, Segment} from "semantic-ui-react";

export default class ProjectList extends React.Component {
    static propTypes = {
        listProjects: PropTypes.func.isRequired,
        loading: PropTypes.bool,
        hasError: PropTypes.bool,
        projects: PropTypes.arrayOf(PropTypes.instanceOf(Project))
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
                <Dimmer active={this.props.loading}>
                    <Loader size="big" />
                </Dimmer>

                {message}

                <List selection relaxed size="big" verticalAlign="middle">
                    {this.props.projects.map(project => (
                        <List.Item key={project.id}>
                            <ProjectListItem project={project}/>
                        </List.Item>
                    ))}
                </List>
            </Dimmer.Dimmable>
        );
    }
}
