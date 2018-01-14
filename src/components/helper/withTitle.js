import React from "react";
import PropTypes from "prop-types";
import {Header} from "semantic-ui-react";

export const withTitle = (titleContents) => {
    return (WrappedComponent) => {
        const hoc = (props) => {
            const {subtitle, ...rest} = props;
            const subtitleContents = subtitle
                ? <Header.Subheader>{subtitle}</Header.Subheader>
                : "";

            return (
                <div>
                    <Header as='h2'>
                        {titleContents}
                        {subtitleContents}
                    </Header>
                    <WrappedComponent {...rest} />
                </div>
            );
        };
        hoc.propTypes = {
            subtitle: PropTypes.string
        };
        hoc.displayName = `withTitle(${getDisplayName(WrappedComponent)})`;
        return hoc;
    };
};

function getDisplayName(component) {
    return component.displayName || component.name || "UnrecognizedComponent";
}
