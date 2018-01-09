import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import ProjectListContainer from "../containers/project/ProjectListContainer";
import CatalogueListRoute from "./catalogue/catalogue-list/CatalogueListRoute";
import {fullContainer, smallContainer} from "./helper/layout";

const AppRoutes = () => (
    <Switch>
        <Route path="/projects" exact component={smallContainer(ProjectListContainer)} />
        <Route path="/projects/:projectId/catalogues" exact component={fullContainer(CatalogueListRoute)} />
        {/* TEMP */}
        <Redirect to="/projects" from="/"/>
    </Switch>
);

export default AppRoutes;
