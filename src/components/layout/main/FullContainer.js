import React from "react";
import {Container} from "semantic-ui-react";
import PropTypes from "prop-types";

export default class FullContainer extends React.Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    };

    render() {
        return (
            <Container fluid={true}>
                {this.props.children}
            </Container>
        );
    }
}
