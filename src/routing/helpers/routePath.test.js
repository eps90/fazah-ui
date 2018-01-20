describe("route path helper", () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it("should return a path to a route", () => {
        const routePath = createRoutePath();

        expect(routePath("routeA")).toEqual("/routeA");
        expect(routePath("routeB")).toEqual("/routeB");
    });

    it("should throw when a route doesn't exist", () => {
        const routePath = createRoutePath();

        expect(() => routePath("nonExistingRoute")).toThrow();
    });

    it("should render a parametrized route", () => {
        const routePath = createRoutePath();

        expect(routePath("parametrized", "p1", "p2")).toEqual("/route/p1/params/p2");
    });

    it("should throw when number of parameters is lower than number path parameter", () => {
        const routePath = createRoutePath();

        expect(() => routePath("parametrized", "p1")).toThrow();
    });

    it("should apply all params even if they exceed route params length", () => {
        const routePath = createRoutePath();

        expect(routePath("parametrized", "p1", "p2", "p3")).toEqual("/route/p1/params/p2");
    });

    function createRoutePath() {
        const routingConfig = {
            routeA: {
                path: "/routeA"
            },
            routeB: {
                path: "/routeB"
            },
            parametrized: {
                path: "/route/:paramA/params/:paramB"
            }
        };
        jest.doMock("./../routingConfig", () => routingConfig);

        return require("./routePath").default;
    }
});
