import React from "react";
import FullContainer from "../layout/main/FullContainer";
import SmallContainer from "../layout/main/SmallContainer";

const FULL = "full";
const SMALL = "small";

const withLayout = (WrappedComponent, type) => {
    const ContainerComponent = getContainerType(type);

    const HOC = (props) => (
        <ContainerComponent>
            <WrappedComponent {...props}/>
        </ContainerComponent>
    );
    HOC.displayName = `withLayout(${WrappedComponent.displayName}:${type})`;
    return HOC;
};

function getContainerType(type) {
    return type.toLowerCase() === SMALL ? SmallContainer : FullContainer;
}

export const fullContainer = (WrappedComponent) => {
    return withLayout(WrappedComponent, FULL);
};

export const smallContainer = (WrappedComponent) => {
    return withLayout(WrappedComponent, SMALL);
};

