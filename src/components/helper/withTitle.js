import React from "react";
import {Header} from "semantic-ui-react";

export const withTitle = (titleContents) => {
    return (WrappedComponent) => {
        const hoc = (props) => {
            return (
                <div>
                    <Header as='h2'>{titleContents}</Header>
                    <WrappedComponent {...props} />
                </div>
            );
        };
        hoc.displayName = `withTitle(${getDisplayName(WrappedComponent)})`;
        return hoc;
    };
};

function getDisplayName(component) {
    return component.displayName || component.name || "UnrecognizedComponent";
}
