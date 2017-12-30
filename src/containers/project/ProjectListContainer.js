import React from 'react';
import ProjectList from "../../components/main/project-list/ProjectList";
import {connect} from "react-redux";
import {listProjects} from "../../store/project/actions";
import PropTypes from 'prop-types';

const ProjectListContainer = ({projects, listProjects, loading}) => (
    <ProjectList projects={projects} listProjects={listProjects} loading={loading} />
);

ProjectListContainer.propTypes = {
    projects: PropTypes.array.isRequired,
    listProjects: PropTypes.func.isRequired,
    loading: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        projects: state.projects.items,
        loading: state.projects.loading
    }
};

export default connect(
    mapStateToProps,
    { listProjects }
)(ProjectListContainer);
