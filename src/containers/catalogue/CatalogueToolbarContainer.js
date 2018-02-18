import React from "react";
import CatalogueToolbar from "../../components/catalogue/catalogue-list/CatalogueToolbar";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addNewCatalogue} from "../../store/catalogueEdit/actions";

const CatalogueToolbarContainer = ({projectId, addNewCatalogue, loading, hasError, ...props}) => (
    <CatalogueToolbar projectId={projectId} addNewCatalogue={addNewCatalogue} loading={loading}
        hasError={hasError} {...props}/>
);

CatalogueToolbarContainer.propTypes = {
    projectId: PropTypes.string.isRequired,
    addNewCatalogue: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    hasError: PropTypes.bool,
    parentId: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        loading: !!state.catalogueEdit.loading,
        hasError: !!state.catalogueEdit.error
    };
};

export default connect(
    mapStateToProps,
    { addNewCatalogue }
)(CatalogueToolbarContainer);