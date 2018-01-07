import React from "react";
import ProjectList from "../../components/project/project-list/ProjectList";
import {connect} from "react-redux";
import {listProjects, selectProject} from "../../store/project/actions";
import PropTypes from "prop-types";
import {withTitle} from "../../components/helper/withTitle";
import {compose} from "redux";

const ProjectListContainer = ({projects, listProjects, loading, hasError, selectProject, ...props}) => (
    <ProjectList projects={projects} listProjects={listProjects} loading={loading} hasError={hasError} selectProject={selectProject} {...props} />
);

ProjectListContainer.propTypes = {
    projects: PropTypes.array.isRequired,
    listProjects: PropTypes.func.isRequired,
    selectProject: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    hasError: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        projects: state.projects.items,
        loading: !!state.projects.loading,
        hasError: !!state.projects.error
    };
};

export default compose(
    connect(mapStateToProps, { listProjects, selectProject }),
    withTitle("Projects")
)(ProjectListContainer);
