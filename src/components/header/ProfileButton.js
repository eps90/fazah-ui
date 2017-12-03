import React from 'react';
import UserIcon from 'grommet/components/icons/base/User'
import Menu from "grommet/components/Menu";
import Anchor from "grommet/components/Anchor";

export default class ProfileButton extends React.Component {
    render() {
        return (
            <Menu label='John Smith' icon={<UserIcon />} reverse={false}>
                <Anchor>Settings</Anchor>
                <Anchor>Logout</Anchor>
            </Menu>
        );
    }
}
