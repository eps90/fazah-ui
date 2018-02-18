import React from "react";
import configureStore from "redux-mock-store";
import CatalogueToolbarContainer from "./CatalogueToolbarContainer";
import {Provider} from "react-redux";
import CatalogueToolbar from "../../components/catalogue/catalogue-list/CatalogueToolbar";
import {mount} from "enzyme";

describe("CatalogueToolbarContainer", () => {
    it("should pass selected project id to CatalogueToolbar", () => {
        const projectId = "294b8539-3d80-482b-91d0-a7282bd548ba";
        const wrapper = mount(getComponentUnderTest({projectId}));

        expect(wrapper.find(CatalogueToolbar).first().prop("projectId")).toEqual(projectId);
    });

    it("should pass addNewCatalogue action as a prop to CatalogueToolbar", () => {
        const wrapper = mount(getComponentUnderTest());
        expect(wrapper.find(CatalogueToolbar).first().prop("addNewCatalogue")).toBeDefined();
    });

    it("should pass loading state", () => {
        const wrapper = mount(getComponentUnderTest({loading: true}));
        expect(wrapper.find(CatalogueToolbar).first().prop("loading")).toBe(true);
    });

    it("should pass error state", () => {
        const wrapper = mount(getComponentUnderTest({error: true}));
        expect(wrapper.find(CatalogueToolbar).first().prop("hasError")).toBe(true);
    });

    it("should pass optional catalogue's parentId", () => {
        const parentId = "736ca9fe-1ad8-4c6c-af2f-83eeee824a73";
        const wrapper = mount(getComponentUnderTest({parentId}));
        expect(wrapper.find(CatalogueToolbar).first().prop("parentId")).toEqual(parentId);
    });

    function getComponentUnderTest(properties = {}) {
        const {
            projectId = "03dccd78-d5c1-4c35-a91b-ba0470b6bec9",
            loading = false,
            error = false,
            parentId = undefined
        } = properties;
        const initialState = {
            catalogueEdit: {
                loading,
                error
            }
        };
        const mockStore = configureStore();
        const storeMock = mockStore(initialState);

        return (
            <Provider store={storeMock}>
                <CatalogueToolbarContainer projectId={projectId} parentId={parentId} />
            </Provider>
        );
    }
});