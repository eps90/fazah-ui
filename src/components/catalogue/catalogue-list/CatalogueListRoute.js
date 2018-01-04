import React from "react";
import CatalogueListContainer from "../../../containers/catalogue/CatalogueListContainer";
import PropTypes from "prop-types";

const CatalogueListRoute = ({match}) => {
    return <CatalogueListContainer projectId={match.params.projectId} />;
};

CatalogueListRoute.propTypes = {
    match: PropTypes.any
};

export default CatalogueListRoute;
