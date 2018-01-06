import React from "react";
import PropTypes from "prop-types";
import Catalogue from "../../../model/Catalogue";
import {List} from "semantic-ui-react";

export default class CatalogueListItem extends React.Component {
    static propTypes = {
        catalogue: PropTypes.instanceOf(Catalogue).isRequired
    };

    render() {
        return (
            <List.Header>{this.props.catalogue.name}</List.Header>
        );
    }
}
