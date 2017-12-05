import React from 'react';
import ProjectListItem from "./ProjectListItem";

export default class ProjectList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ul>
            {this.props.projects.map(el => <li key={el.id}><ProjectListItem project={el}/></li>)}
        </ul>
    }
}
