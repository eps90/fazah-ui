import React from "react";
import {mount} from "enzyme";
import Breadcrumb from "./Breadcrumb";
import {Link, MemoryRouter} from "react-router-dom";
import {Breadcrumb as SuiBreadcrumb} from "semantic-ui-react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

describe("Breadcrumb", () => {
    const breadcrumbsConfig = [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "Submenu",
            link: "/submenu"
        },
        {
            label: "End path"
        }
    ];

    it("should create links from provided config", () => {
        const component = mount(createComponent());
        const links = component.find(Link);
        expect(links).toHaveLength(2);
    });

    it("should render link anchors", () => {
        const component = mount(createComponent());
        const links = component.find(Link);

        expect(links.at(0).prop("to")).toEqual("/");
        expect(links.at(1).prop("to")).toEqual("/submenu");
    });

    it("should render a divers", () => {
        const component = mount(createComponent());
        expect(component.find(SuiBreadcrumb.Divider)).toHaveLength(2);
    });

    it("should render a static text on a node without a link", () => {
        const component = mount(createComponent());
        const lastSection = component.find(SuiBreadcrumb.Section).last();
        expect(lastSection.text()).toEqual("End path");
        expect(lastSection.prop("active")).toBeTruthy();
    });

    describe("with redux store", () => {
        it("should be able to render a breadcrumb label by state from store", () => {
            const breadcrumbsWithState = [
                {
                    link: "/routeA",
                    label: ({store}) => store.selectedProject.name
                }
            ];
            const component = mount(createComponent(breadcrumbsWithState));
            const breadcrumbSection = component.find(SuiBreadcrumb.Section).last();
            expect(breadcrumbSection.text()).toEqual("My project");
        });

        it("should be able to render a breadcrumb link by state from store", () => {
            const breadcrumbsWithState = [
                {
                    label: "Catalogues",
                    link: ({store}) => {
                        return `/project/${store.selectedProject.id}/catalogues`;
                    }
                },
                {
                    label: "This catalogue"
                }
            ];
            const component = mount(createComponent(breadcrumbsWithState));
            const breadcrumbLink = component.find(Link).last();

            expect(breadcrumbLink.prop("to")).toEqual("/project/123/catalogues");
        });
    });

    function createComponent(config = breadcrumbsConfig) {
        const state = {
            selectedProject: {
                id: 123,
                name: "My project"
            }
        };
        const mockStore = configureStore();
        const store = mockStore(state);

        return (
            <Provider store={store}>
                <MemoryRouter>
                    <Breadcrumb items={config}/>
                </MemoryRouter>
            </Provider>
        );
    }
});
