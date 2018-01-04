import React from "react";
import PropTypes from "prop-types";
import CatalogueListItem from "./CatalogueListItem";
import Message from "../../layout/helper/Message";
import List from "grommet/components/List";
import ListItem from "grommet/components/ListItem";
import Spinner from "../../layout/helper/Spinner";
import Catalogue from "../../../model/Catalogue";

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

    componentWillMount() {
        this.props.listCatalogues(this.props.projectId);
    }

    render() {
        let contents;
        if (this.props.loading) {
            contents = <Spinner />;
        } else if (this.props.hasError) {
            contents = <Message status='critical' message='Error occurred when fetching catalogues' />;
        } else if (this.props.catalogues.length === 0) {
            contents = <Message status='disabled' message='No catalogues to show' />;
        } else {
            contents = <List>
                {this.props.catalogues.map((el) =>
                    <ListItem key={el.id}><CatalogueListItem catalogue={el} /></ListItem>
                )}
            </List>;
        }

        return contents;
    }
}
