import React from "react";
import CatalogueList from "./CatalogueList";
import {Dimmer, Icon, Loader, Message} from "semantic-ui-react";

export default class LoadableCatalogueList extends React.Component {
    static propTypes = CatalogueList.propTypes;

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
            <Dimmer.Dimmable dimmed={this.props.loading}>
                <Dimmer active={this.props.loading} inverted>
                    <Loader size="big" />
                </Dimmer>

                {message}

                <CatalogueList {...this.props} />
            </Dimmer.Dimmable>
        );
    }
}