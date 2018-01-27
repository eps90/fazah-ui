import React from "react";
import {MemoryRouter} from "react-router-dom";
import {mount} from "enzyme";
import Breadcrumb from "../../components/layout/breadcrumb/Breadcrumb";
import RoutedBreadcrumbs from "./RoutedBreadcrumbs";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

describe("BreadcrumbsFromConfig component", () => {
    const routingConfig = [
        {
            path: "/"
        },
        {
            path: "/routeA",
            breadcrumbs: [
                {link: "/", label: "Home"},
                {label: "Route A"}
            ]
        },
        {
            path: "/routeA/routeB",
            breadcrumbs: [
                {link: "/", label: "Home"},
                {link: "/routeA", label: "Route A"},
                {label: "Route B"}
            ]
        }
    ];

    beforeEach(() => {
        jest.resetModules();
    });

    it("should render Breadcrumbs component for a route", () => {
        const component = mount(getComponentUnderTest());
        expect(component.find(Breadcrumb)).toHaveLength(1);
    });

    it("should render multilevel breadcrumbs", () => {
        const component = mount(getComponentUnderTest(2));
        expect(component.find(Breadcrumb)).toHaveLength(1);
    });

    it("should not render Breadcrumb if there is no breadcrumbs provided", () => {
        const component = mount(getComponentUnderTest(0));
        expect(component.find(Breadcrumb)).toHaveLength(0);
    });

    function getComponentUnderTest(initialIndex = 1) {
        const mockStore = configureStore();
        const store = mockStore({});

        const initialEntries = routingConfig.map(route => route.path);
        return (
            <Provider store={store}>
                <MemoryRouter initialEntries={initialEntries} initialIndex={initialIndex}>
                    <RoutedBreadcrumbs config={routingConfig} />
                </MemoryRouter>
            </Provider>
        );
    }
});
