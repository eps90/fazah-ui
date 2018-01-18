import React from "react";
import ProjectList from "../../components/project/project-list/ProjectList";
import {connect} from "react-redux";
import {listProjects, showProjectCatalogues} from "../../store/project/actions";
import PropTypes from "prop-types";
import {withTitle} from "../../components/helper/withTitle";
import {compose} from "redux";

const ProjectListContainer = ({projects, listProjects, loading, hasError, showProjectCatalogues, ...props}) => (
    <ProjectList projects={projects} listProjects={listProjects} loading={loading} hasError={hasError} showProjectCatalogues={showProjectCatalogues} {...props} />
);

ProjectListContainer.propTypes = {
    projects: PropTypes.array.isRequired,
    listProjects: PropTypes.func.isRequired,
    showProjectCatalogues: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    hasError: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        projects: state.projects.items,
        loading: !!state.projects.loading,
        hasError: !!state.projects.error,
        title: "Projects"
    };
};

export default compose(
    connect(mapStateToProps, { listProjects, showProjectCatalogues }),
    withTitle
)(ProjectListContainer);
