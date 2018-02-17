import React from "react";
import {mount, shallow} from "enzyme";
import Catalogue from "../../../model/Catalogue";
import CatalogueList from "./CatalogueList";
import CatalogueListItem from "./CatalogueListItem";

describe("CatalogueList component", () => {
    it("should render a list of provided catalogues", () => {
        const catalogues = getCataloguesList();
        const listCataloguesFn = jest.fn();
        const wrapper = shallow(<CatalogueList catalogues={catalogues} listCatalogues={listCataloguesFn} />);
        expect(wrapper.find(CatalogueListItem)).toHaveLength(2);
    });

    it("should call list catalogues for project id function on mount", () => {
        expect.assertions(1);

        const listCataloguesFn = jest.fn();
        const catalogues = [];
        const projectId = "312312";
        mount(<CatalogueList projectId={projectId} projects={catalogues} listCatalogues={listCataloguesFn} />);

        expect(listCataloguesFn).toHaveBeenCalledWith(projectId);
    });

    function getCataloguesList() {
        return [
            new Catalogue("id1", "Catalogue 1"),
            new Catalogue("id2", "Catalogue 2")
        ];
    }
});
