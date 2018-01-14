import React from "react";
import {Container} from "semantic-ui-react";
import PropTypes from "prop-types";
import SidebarMenu from "./SidebarMenu";

export default class FullContainer extends React.Component {
    static propTypes = {
        children: PropTypes.any.isRequired
    };

    render() {
        const contentStyle = {
            marginLeft: "250px"
        };

        return (
            <Container fluid={true}>
                <SidebarMenu />
                <div style={contentStyle}>
                    {this.props.children}
                </div>
            </Container>
        );
    }
}
