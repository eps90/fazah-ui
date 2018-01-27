import React from "react";
import Breadcrumbs from "../../components/layout/breadcrumb/Breadcrumbs";
import {Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";

export default class RoutedBreadcrumbs extends React.Component {
    static propTypes = {
        config: PropTypes.arrayOf(
            PropTypes.shape({
                path: PropTypes.string.isRequired,
                exact: PropTypes.bool,
                breadcrumbs: PropTypes.arrayOf(
                    PropTypes.shape({
                        link: PropTypes.string,
                        label: PropTypes.string.isRequired
                    })
                )
            })
        )
    };

    renderRoute(route) {
        const {path, exact = true, breadcrumbs} = route;
        return (
            breadcrumbs &&
            <Route key={path} path={path} exact={exact} render={() => {
                return <Breadcrumbs items={breadcrumbs} />;
            }} />
        );
    }

    render() {
        const {config} = this.props;
        return (
            <Switch>
                {config.map(this.renderRoute.bind(this))}
            </Switch>
        );
    }
}
