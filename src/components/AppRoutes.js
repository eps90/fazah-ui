import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import ProjectListContainer from "../containers/project/ProjectListContainer";
import CatalogueListRoute from "./catalogue/catalogue-list/CatalogueListRoute";

const AppRoutes = () => (
    <Switch>
        <Route path="/projects" exact component={ProjectListContainer} />
        <Route path="/projects/:projectId/catalogues" exact component={CatalogueListRoute} />
        {/* TEMP */}
        <Redirect to="/projects" from="/"/>
    </Switch>
);

export default AppRoutes;
