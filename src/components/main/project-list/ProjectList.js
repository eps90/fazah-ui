import React from 'react';
import ProjectListItem from "./ProjectListItem";
import Message from "../message/Message";

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let result;
        if (!this.props.projects || this.props.projects.length === 0) {
            result = <Message status='disabled' message='No projects to show' />;
        } else {
            result = <ul>
                {this.props.projects.map((el) =>
                    <li key={el.id}><ProjectListItem/></li>
                )}
            </ul>;
        }

        return result;
    }
}
