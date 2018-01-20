import React from "react";

describe("get sidebar routes helper", () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it("should return sidebar routes", () => {
        const getSidebarRoutes = createGetSidebarRoutes();
        const expectedRoutes = [
            {path: "/routeA", component: TestComponent},
            {path: "/routeB", component: OtherComponent},
        ];

        expect(getSidebarRoutes()).toEqual(expectedRoutes);
    });

    function createGetSidebarRoutes() {
        const routesConfig = {
            routeA: {
                path: "/routeA",
                sidebar: TestComponent
            },
            routeB: {
                path: "/routeB",
                sidebar: OtherComponent
            },
            routeC: {}
        };
        jest.doMock("./../routingConfig", () => routesConfig);

        return require("./getSidebarRoutes").default;
    }
});


const TestComponent = () => (
    <h1>Hello world!</h1>
);

const OtherComponent = () => (
    <h2>Hello there!</h2>
);
