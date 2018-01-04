import React from "react";
import {mount, shallow} from "enzyme";
import Message from "../../layout/helper/Message";
import Spinner from "../../layout/helper/Spinner";
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

    it("should show a message when no catalogues are found", () => {
        const catalogues = [];
        const listCataloguesFn = jest.fn();
        const wrapper = shallow(<CatalogueList catalogues={catalogues} listCatalogues={listCataloguesFn} />);
        expect(wrapper.find(Message)).toHaveLength(1);
    });

    it("should show a spinner when catalogues are loading", () => {
        const catalogues = [];
        const listCataloguesFn = jest.fn();
        const isLoading = true;

        const wrapper = shallow(<CatalogueList catalogues={catalogues} listCatalogues={listCataloguesFn} loading={isLoading} />);

        expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it("should call list catalogues for project id function on mount", () => {
        expect.assertions(1);

        const listCataloguesFn = jest.fn();
        const catalogues = [];
        const projectId = "312312";
        mount(<CatalogueList projectId={projectId} projects={catalogues} listCatalogues={listCataloguesFn} />);

        expect(listCataloguesFn).toHaveBeenCalledWith(projectId);
    });

    it("should show a message when error occurs", () => {
        expect.assertions(2);

        const listCataloguesFn = jest.fn();
        const catalogues = [];
        const wrapper = mount(<CatalogueList catalogues={catalogues} listCatalogues={listCataloguesFn} hasError={true} />);

        const messageElement = wrapper.find(Message);
        expect(messageElement).toHaveLength(1);
        expect(messageElement.props().status).toEqual("critical");
    });

    function getCataloguesList() {
        return [
            new Catalogue("id1", "Catalogue 1"),
            new Catalogue("id2", "Catalogue 2")
        ];
    }
});
