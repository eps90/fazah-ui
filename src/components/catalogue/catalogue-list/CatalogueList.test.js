import React from "react";
import {mount, shallow} from "enzyme";
import Catalogue from "../../../model/Catalogue";
import CatalogueList from "./CatalogueList";
import CatalogueListItem from "./CatalogueListItem";

describe("CatalogueList component", () => {
    it("should render a list of provided catalogues", () => {
        const catalogues = getCataloguesList();
        const wrapper = shallow(getComponentUnderTest({catalogues}));
        expect(wrapper.find(CatalogueListItem)).toHaveLength(2);
    });

    it("should call list catalogues for project id function on mount", () => {
        expect.assertions(1);

        const listCataloguesFn = jest.fn();
        const projectId = "312312";
        mount(getComponentUnderTest({listCatalogues: listCataloguesFn, projectId}));

        expect(listCataloguesFn).toHaveBeenCalledWith(projectId);
    });

    it("should allow to add toolbar component", () => {
        expect.assertions(1);

        const toolbar = <TestToolbar />;
        const wrapper = shallow(getComponentUnderTest({toolbar}));

        expect(wrapper.find(TestToolbar)).toHaveLength(1);
    });

    function getComponentUnderTest(properties = {}) {
        const {
            projectId = "",
            listCatalogues = jest.fn(),
            toolbar = undefined,
            catalogues = []
        } = properties;
        return <CatalogueList projectId={projectId} listCatalogues={listCatalogues} toolbar={toolbar}
            catalogues={catalogues}/>;
    }

    function getCataloguesList() {
        return [
            new Catalogue("id1", "Catalogue 1"),
            new Catalogue("id2", "Catalogue 2")
        ];
    }
});

const TestToolbar = () => (
    <h1>Hello from toolbar!</h1>
);