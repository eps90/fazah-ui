import React from "react";
import {Menu} from "semantic-ui-react";
import Logo from "../header/Logo";

const SidebarMenu = () => (
    <Menu vertical inverted fixed="left">
        <Menu.Item>
            <Logo inverted/>
        </Menu.Item>
        <Menu.Item>
            <Menu.Header>First menu</Menu.Header>
            <Menu.Menu>
                <Menu.Item>First sub menu</Menu.Item>
                <Menu.Item>Second sub menu</Menu.Item>
            </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
            <Menu.Header>Second menu</Menu.Header>
            <Menu.Menu>
                <Menu.Item>First sub menu</Menu.Item>
                <Menu.Item>Second sub menu</Menu.Item>
            </Menu.Menu>
        </Menu.Item>
    </Menu>
);

export default SidebarMenu;
