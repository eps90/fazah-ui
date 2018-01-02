import React from "react";
import Title from "grommet/components/Title";

export const withTitle = (titleContents) => {
    return (WrappedComponent) => {
        const hoc = (props) => {
            return (
                <div>
                    <Title>{titleContents}</Title>
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
