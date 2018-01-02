import React from "react";
import PropTypes from "prop-types";
import ProjectListItem from "./ProjectListItem";
import Message from "../../layout/helper/Message";
import List from "grommet/components/List";
import ListItem from "grommet/components/ListItem";
import Project from "../../../model/Project";
import Spinner from "../../layout/helper/Spinner";

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

    componentWillMount() {
        this.props.listProjects();
    }

    render() {
        let contents;
        if (this.props.loading) {
            contents = <Spinner />;
        } else if (this.props.hasError) {
            contents = <Message status='critical' message='Error occurred when fetching projects' />;
        } else if (this.props.projects.length === 0) {
            contents = <Message status='disabled' message='No projects to show' />;
        } else {
            contents = <List>
                {this.props.projects.map((el) =>
                    <ListItem key={el.id}><ProjectListItem project={el} /></ListItem>
                )}
            </List>;
        }

        return contents;
    }
}
