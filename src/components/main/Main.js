import React from 'react';
import Header from "../header/Header";
import Article from "grommet/components/Article";
import ProjectsListContainer from "./ProjectsListContainer";
import Box from "grommet/components/Box";

export default class Main extends React.Component {
    render() {
        return (
            <Box>
                <Header />
                <Article>
                    <ProjectsListContainer />
                </Article>
            </Box>
        )
    }
}
