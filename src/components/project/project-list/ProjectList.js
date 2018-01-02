import React from "react";
import ProjectListItem from "./ProjectListItem";
import Message from "../../layout/helper/Message";
import List from "grommet/components/List";
import ListItem from "grommet/components/ListItem";
import Project from "../../../model/Project";
import Spinner from "../../layout/helper/Spinner";

export default class ProjectList extends React.Component {
    props: {
        projects: Project[],
        listProjects: Function,
        loading: boolean,
        hasError: boolean
    };

    static defaultProps = {
        loading: false
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
