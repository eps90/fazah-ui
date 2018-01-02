import React from "react";
import Logo from "./Logo";
import GrommetSidebar from "grommet/components/Sidebar";

export default class Sidebar extends React.Component {
    render() {
        return (
            <GrommetSidebar fixed={true} full={true} pad='medium' colorIndex='neutral-1-a'>
                <Logo/>
            </GrommetSidebar>
        );
    }
}
