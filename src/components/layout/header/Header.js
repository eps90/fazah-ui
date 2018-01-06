import React from "react";
import {Menu} from "semantic-ui-react";
import Logo from "../sidebar/Logo";

export default class Header extends React.Component {
    render() {
        return (
            <Menu fluid={true}>
                <Menu.Item fitted='horizontally'>
                    <Logo />
                </Menu.Item>
            </Menu>
        );
    }
}
