import React from 'react';
import ProjectList from "../../components/project/project-list/ProjectList";
import {connect} from "react-redux";
import {listProjects} from "../../store/project/actions";
import PropTypes from 'prop-types';

const ProjectListContainer = ({projects, listProjects, loading, hasError}) => (
    <ProjectList projects={projects} listProjects={listProjects} loading={loading} hasError={hasError} />
);

ProjectListContainer.propTypes = {
    projects: PropTypes.array.isRequired,
    listProjects: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    hasError: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        projects: state.projects.items,
        loading: state.projects.loading,
        hasError: !!state.projects.error
    }
};

export default connect(
    mapStateToProps,
    { listProjects }
)(ProjectListContainer);
