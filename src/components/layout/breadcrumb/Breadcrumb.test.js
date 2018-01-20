import React from "react";
import {mount} from "enzyme";
import Breadcrumb from "./Breadcrumb";
import {Link, MemoryRouter} from "react-router-dom";
import {Breadcrumb as SuiBreadcrumb} from "semantic-ui-react";

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

    function createComponent() {
        return (
            <MemoryRouter>
                <Breadcrumb items={breadcrumbsConfig}/>
            </MemoryRouter>
        );
    }
});
