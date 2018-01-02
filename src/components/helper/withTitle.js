import React from 'react';
import Title from "grommet/components/Title";

export const withTitle = (titleContents) => {
    return (WrappedComponent) => {
        return (props) => {
            return (
                <div>
                    <Title>{titleContents}</Title>
                    <WrappedComponent {...props} />
                </div>
            );
        }
    };
};
