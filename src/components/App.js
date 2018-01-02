import React from "react";
import GrommetApp from "grommet/components/App";
import Split from "grommet/components/Split";
import Box from "grommet/components/Box";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";

export default class App extends React.Component {
    render() {
        return (
            <GrommetApp centered={false}>
                <Box full={true}>
                    <Split fixed={true} flex='right'>
                        <Sidebar />
                        <Main/>
                    </Split>
                </Box>
            </GrommetApp>
        );
    }
}
