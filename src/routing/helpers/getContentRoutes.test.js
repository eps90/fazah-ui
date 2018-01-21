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
        expect(getContentRoutes()).toEqual(expect.arrayContaining(expectedRoutes));
    });

    it("should return a route with a redirect", () => {
        const getContentRoutes = createGetContentRoutes();

        const expectedRedirectRoute = [{redirectTo: "/aaa"}];
        expect(getContentRoutes()).toEqual(expect.arrayContaining(expectedRedirectRoute));
    });

    it("should return a route with render property", () => {
        const getContentRoutes = createGetContentRoutes();

        const expectedRedirectRoute = [{render: expect.any(Function)}];
        expect(getContentRoutes()).toEqual(expect.arrayContaining(expectedRedirectRoute));
    });

    function createGetContentRoutes() {
        const routesConfig = {
            routeA: {
                component: TestComponent
            },
            routeB: {
                component: OtherComponent
            },
            routeC: {},
            routeD: {
                redirectTo: "/aaa"
            },
            routeE: {
                render: () => TestComponent
            }
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
