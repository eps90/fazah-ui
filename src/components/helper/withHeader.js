import React from "react";
import PropTypes from "prop-types";
import {Header} from "semantic-ui-react";

export const withHeader = WrappedComponent => {
    const hoc = (props) => {
        const {subtitle, title, ...rest} = props;
        const subtitleContents = subtitle
            ? <Header.Subheader>{subtitle}</Header.Subheader>
            : "";

        return (
            <div>
                <Header as='h2'>
                    {title}
                    {subtitleContents}
                </Header>
                <WrappedComponent {...rest} />
            </div>
        );
    };
    hoc.propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.node
    };
    hoc.displayName = `withTitle(${getDisplayName(WrappedComponent)})`;
    return hoc;
};

function getDisplayName(component) {
    return component.displayName || component.name || "UnrecognizedComponent";
}
