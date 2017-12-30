import React from 'react';
import Header from "../header/Header";
import Box from "grommet/components/Box";
import ProjectListContainer from "../../containers/project/ProjectListContainer";

export default class Main extends React.Component {
    render() {
        return (
            <Box>
                <Header />
                <Box pad='medium'>
                    <ProjectListContainer />
                </Box>
            </Box>
        )
    }
}
