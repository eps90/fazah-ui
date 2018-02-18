import React from "react";
import CatalogueListContainer from "../../../containers/catalogue/CatalogueListContainer";
import PropTypes from "prop-types";
import CatalogueToolbarContainer from "../../../containers/catalogue/CatalogueToolbarContainer";

const CatalogueListRoute = ({match}) => {
    const projectId = match.params.projectId;
    const toolbar = <CatalogueToolbarContainer projectId={projectId}/>;
    return (
        <CatalogueListContainer projectId={projectId} toolbar={toolbar} />
    );
};

CatalogueListRoute.propTypes = {
    match: PropTypes.any
};

export default CatalogueListRoute;
