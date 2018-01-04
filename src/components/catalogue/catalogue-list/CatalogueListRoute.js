import React from "react";
import {withRouter} from "react-router-dom";
import CatalogueListContainer from "../../../containers/catalogue/CatalogueListContainer";
import PropTypes from "prop-types";

const CatalogueListRoute = ({match}) => {
    return <CatalogueListContainer projectId={match.params.projectId} />;
};

CatalogueListRoute.propTypes = {
    match: PropTypes.any
};

export default CatalogueListRoute;
