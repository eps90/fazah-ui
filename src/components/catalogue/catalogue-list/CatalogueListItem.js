import React from "react";
import PropTypes from "prop-types";
import Catalogue from "../../../model/Catalogue";

export default class CatalogueListItem extends React.Component {
    static propTypes = {
        catalogue: PropTypes.instanceOf(Catalogue).isRequired
    };

    render() {
        return (
            <span className='catalogue-list-item'>{this.props.catalogue.name}</span>
        );
    }
}
