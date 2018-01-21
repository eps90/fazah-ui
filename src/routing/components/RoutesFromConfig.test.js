import React from "react";
import RoutesFromConfig from "./RoutesFromConfig";
import {mount} from "enzyme";
import {MemoryRouter, Route, Switch} from "react-router-dom";

describe("RoutesFromConfig component", () => {
    const TestComponent = () => (
        <h1>Hello routes!</h1>
    );

    const OtherComponent = () => (
        <h2>Hello again!</h2>
    );

    const routingConfig = [
        {
            path: "/routeA",
            component: TestComponent,
            exact: true
        },
        {
            path: "/routeB",
            component: OtherComponent,
            exact: false
        },
        {
            path: "/routeC",
            exact: true,
            render: () => {
                return <TestComponent />;
            }
        }
    ];

    it("should render routes inside a switch", () => {
        const component = mount(createComponentUnderTest(routingConfig, 0));
        expect(component.find(Switch)).toHaveLength(1);
    });

    it("should render routes components", () => {
        let component = mount(createComponentUnderTest(routingConfig, 0));
        expect(component.find(Route)).toHaveLength(1);
        expect(component.find(Route).first().prop("exact")).toEqual(true);

        component = mount(createComponentUnderTest(routingConfig, 1));
        expect(component.find(Route)).toHaveLength(1);
        expect(component.find(Route).first().prop("exact")).toEqual(false);
    });

    it("should render a component under a route", () => {
        let component = mount(createComponentUnderTest(routingConfig, 0));
        expect(component.find(TestComponent)).toHaveLength(1);

        component = mount(createComponentUnderTest(routingConfig, 1));
        expect(component.find(OtherComponent)).toHaveLength(1);
    });

    it("should render routes with function", () => {
        let component = mount(createComponentUnderTest(routingConfig, 2));
        expect(component.find(TestComponent)).toHaveLength(1);
    });
});

function createComponentUnderTest(routingConfig, initialIndex) {
    const initialEntries = routingConfig.map(route => route.path);

    return (
        <MemoryRouter initialEntries={initialEntries} initialIndex={initialIndex}>
            <RoutesFromConfig config={routingConfig} />
        </MemoryRouter>
    );
}
