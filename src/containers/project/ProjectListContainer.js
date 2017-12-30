import React from 'react';
import ProjectList from "../../components/main/project-list/ProjectList";
import {connect} from "react-redux";
import {listProjects} from "../../store/project/actions";
import PropTypes from 'prop-types';

const ProjectListContainer = ({projects, listProjects}) => (
    <ProjectList projects={projects} listProjects={listProjects} />
);

ProjectListContainer.propTypes = {
    projects: PropTypes.array.isRequired,
    listProjects: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {projects: state.projects.items}
};

export default connect(
    mapStateToProps,
    { listProjects }
)(ProjectListContainer);
