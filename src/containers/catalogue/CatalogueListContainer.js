import React from "react";
import {connect} from "react-redux";
import {listCataloguesForProject} from "../../store/catalogue/actions";
import PropTypes from "prop-types";
import {withTitle} from "../../components/helper/withTitle";
import {compose} from "redux";
import CatalogueList from "../../components/catalogue/catalogue-list/CatalogueList";

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
    return {
        catalogues: state.catalogues.items,
        loading: !!state.catalogues.loading,
        hasError: !!state.catalogues.error
    };
};

export default compose(
    connect(mapStateToProps, { listCatalogues: listCataloguesForProject }),
    withTitle("Catalogues"),
)(CatalogueListContainer);
