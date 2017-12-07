import React from 'react';
import ProjectListItem from "./ProjectListItem";
import Message from "../message/Message";
import List from "grommet/components/List";
import ListItem from "grommet/components/ListItem";

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let result;
        if (!this.props.projects || this.props.projects.length === 0) {
            result = <Message status='disabled' message='No projects to show' />;
        } else {
            result = <List>
                {this.props.projects.map((el) =>
                    <ListItem key={el.id}><ProjectListItem project={el} /></ListItem>
                )}
            </List>;
        }

        return result;
    }
}
