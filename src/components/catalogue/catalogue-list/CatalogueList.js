import React from "react";
import PropTypes from "prop-types";
import CatalogueListItem from "./CatalogueListItem";
import Catalogue from "../../../model/Catalogue";
import {Dimmer, Icon, List, Loader, Message, Segment} from "semantic-ui-react";

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
        let message = "";
        if (this.props.hasError) {
            message = (
                <Message negative icon>
                    <Icon name="exclamation triangle" />
                    <Message.Header>Error occurred when fetching catalogues</Message.Header>
                </Message>
            );
        } else if (!this.props.loading && this.props.catalogues.length === 0) {
            message = (
                <Message info icon>
                    <Icon name="info" />
                    <Message.Header>No catalogues to show</Message.Header>
                </Message>
            );
        }

        return (
            <Dimmer.Dimmable as={Segment} padded="very" dimmed={this.props.loading}>
                <Dimmer active={this.props.loading}>
                    <Loader size="big" />
                </Dimmer>

                {message}

                <List selection relaxed size="big" verticalAlign="middle">
                    {this.props.catalogues.map(catalogue => (
                        <List.Item key={catalogue.id}>
                            <CatalogueListItem catalogue={catalogue}/>
                        </List.Item>
                    ))}
                </List>
            </Dimmer.Dimmable>
        );
    }
}
