import React from "react";
import Heading from "grommet/components/Heading";

export const withTitle = (titleContents) => {
    return (WrappedComponent) => {
        const hoc = (props) => {
            return (
                <div>
                    <Heading strong={true} margin='medium' tag='h2'>{titleContents}</Heading>
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
