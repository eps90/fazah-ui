import React from "react";
import PropTypes from "prop-types";
import {Container} from "semantic-ui-react";

export default class SmallContainer extends React.Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    };

    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        );
    }
}
