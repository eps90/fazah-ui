import React from "react";
import PropTypes from "prop-types";
import {Container} from "semantic-ui-react";
import Header from "../header/Header";

export default class SmallContainer extends React.Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    };

    render() {
        return (
            <div>
                <Header/>
                <Container>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}
