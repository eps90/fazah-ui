import React from "react";

describe("get content routes helper", () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it("should return component only routes", () => {
        const getContentRoutes = createGetContentRoutes();

        const expectedRoutes = [
            {component: TestComponent},
            {component: OtherComponent}
        ];
        expect(getContentRoutes()).toEqual(expectedRoutes);
    });

    function createGetContentRoutes() {
        const routesConfig = {
            routeA: {
                component: TestComponent
            },
            routeB: {
                component: OtherComponent
            },
            routeC: {}
        };
        jest.doMock("./../routingConfig", () => routesConfig);

        return require("./getContentRoutes").default;
    }
});

const TestComponent = () => (
    <h1>Hello world!</h1>
);

const OtherComponent = () => (
    <h2>Hello there!</h2>
);
