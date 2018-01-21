import React from "react";
import PropTypes from "prop-types";
import {Redirect, Route, Switch} from "react-router-dom";

const RoutesFromConfig = ({config}) => {
    return <Switch>
        {config.map((routeConfig, idx) => {
            if ("component" in routeConfig || "render" in routeConfig) {
                return <Route key={idx} {...routeConfig} />;
            }

            return <Redirect key={idx} from={routeConfig.path} to={routeConfig.redirectTo} />;
        })}
    </Switch>;
};

RoutesFromConfig.propTypes = {
    config: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            exact: PropTypes.bool,
            component: PropTypes.func,
            render: PropTypes.func
        })
    )
};

export default RoutesFromConfig;
