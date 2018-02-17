import React from "react";
import {connect} from "react-redux";
import {listCataloguesForProject} from "../../store/catalogue/actions";
import {withHeader} from "../../components/helper/withHeader";
import {compose} from "redux";
import Breadcrumbs from "../../components/layout/breadcrumb/Breadcrumbs";
import LoadableCatalogueList from "../../components/catalogue/catalogue-list/LoadableCatalogueList";
import CatalogueList from "../../components/catalogue/catalogue-list/CatalogueList";

const CatalogueListContainer = ({catalogues, listCatalogues, loading, hasError, projectId}) => {
    return <LoadableCatalogueList catalogues={catalogues} listCatalogues={listCatalogues}
        loading={loading} hasError={hasError} projectId={projectId}  />;
};

CatalogueListContainer.propTypes = CatalogueList.propTypes;

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
    withHeader,
)(CatalogueListContainer);
