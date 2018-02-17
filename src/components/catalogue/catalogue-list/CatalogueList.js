import React from "react";
import PropTypes from "prop-types";
import CatalogueListItem from "./CatalogueListItem";
import Catalogue from "../../../model/Catalogue";
import {List} from "semantic-ui-react";

export default class CatalogueList extends React.Component {
    static propTypes = {
        listCatalogues: PropTypes.func.isRequired,
        loading: PropTypes.bool,
        hasError: PropTypes.bool,
        catalogues: PropTypes.arrayOf(PropTypes.instanceOf(Catalogue)),
        projectId: PropTypes.string
    };

    static defaultProps = {
        loading: false,
        catalogues: []
    };

    componentDidMount() {
        this.props.listCatalogues(this.props.projectId);
    }

    render() {
        return (
            <List selection relaxed size="big" verticalAlign="middle">
                {this.props.catalogues.map(catalogue => (
                    <List.Item key={catalogue.id}>
                        <CatalogueListItem catalogue={catalogue}/>
                    </List.Item>
                ))}
            </List>
        );
    }
}
