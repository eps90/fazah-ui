import React from "react";
import Header from "../header/Header";
import Box from "grommet/components/Box";
import ProjectListContainer from "../../../containers/project/ProjectListContainer";
import {Redirect, Route, Switch} from "react-router-dom";

export default class Main extends React.Component {
    render() {
        return (
            <Box>
                <Header />
                <Box pad='medium'>
                    <Switch>
                        <Route path="/projects" exact component={ProjectListContainer} />
                        {/* TEMP */}
                        <Redirect to="/projects" from="/"/>
                    </Switch>
                </Box>
            </Box>
        );
    }
}
