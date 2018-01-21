import React from "react";
import PropTypes from "prop-types";
import {Route, Switch} from "react-router-dom";

const RoutesFromConfig = ({config}) => {
    return <Switch>
        {config.map((routeConfig, idx) => (
            <Route key={idx} {...routeConfig} />
        ))}
    </Switch>;
};

RoutesFromConfig.propTypes = {
    config: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            exact: PropTypes.bool.isRequired,
            component: PropTypes.func,
            render: PropTypes.func
        })
    )
};

export default RoutesFromConfig;
