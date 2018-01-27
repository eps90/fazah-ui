import React from "react";
import {connect} from "react-redux";
import {listCataloguesForProject} from "../../store/catalogue/actions";
import PropTypes from "prop-types";
import {withTitle} from "../../components/helper/withTitle";
import {compose} from "redux";
import CatalogueList from "../../components/catalogue/catalogue-list/CatalogueList";
import Breadcrumbs from "../../components/layout/breadcrumb/Breadcrumbs";

const CatalogueListContainer = ({catalogues, listCatalogues, loading, hasError, projectId}) => {
    return <CatalogueList catalogues={catalogues} listCatalogues={listCatalogues}
        loading={loading} hasError={hasError} projectId={projectId}  />;
};

CatalogueListContainer.propTypes = {
    catalogues: PropTypes.array.isRequired,
    listCatalogues: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    hasError: PropTypes.bool,
    projectId: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    const title = state.projects.selectedProject
        ? state.projects.selectedProject.name
        : "[unknown project]";

    // @todo Move this to router-aware component
    const breadCrumbs = [
        {
            label: "Projects",
            link: "/"
        },
        {
            label: `Project: ${title}`
        }
    ];
    const subtitle = <Breadcrumbs items={breadCrumbs}/>;

    return {
        catalogues: state.catalogues.items,
        loading: !!state.catalogues.loading,
        hasError: !!state.catalogues.error,
        title,
        subtitle
    };
};

export default compose(
    connect(mapStateToProps, { listCatalogues: listCataloguesForProject }),
    withTitle,
)(CatalogueListContainer);
