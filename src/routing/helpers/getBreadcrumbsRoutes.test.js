describe("getBreadcrumbsRoutes helper", () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it("should return all routes with breadcrumbs", () => {
        const getBreadcrumbsRoutes = createGetBreadcrumbsRoutes();
        const expectedRoutes = [
            {
                breadcrumbs: [
                    {label: "route a", link: "/routeB"},
                    {label: "route b"}
                ]
            }
        ];

        expect(getBreadcrumbsRoutes()).toEqual(expectedRoutes);
    });

    function createGetBreadcrumbsRoutes() {
        const config = {
            routeA: {
                breadcrumbs: [
                    {label: "route a", link: "/routeB"},
                    {label: "route b"}
                ]
            },
            routeB: {}
        };

        jest.doMock("./../routingConfig", () => config);
        return require("./getBreadcrumbsRoutes").default;
    }
});
