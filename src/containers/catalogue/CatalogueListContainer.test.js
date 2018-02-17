import React from "react";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {mount} from "enzyme";
import CatalogueListContainer from "./CatalogueListContainer";
import Catalogue from "../../model/Catalogue";
import {MemoryRouter} from "react-router-dom";
import LoadableCatalogueList from "../../components/catalogue/catalogue-list/LoadableCatalogueList";

describe("CataloguesListContainer", () => {
    const mockStore = configureStore();

    it("should render a LoadableCatalogueList component with catalogues", () => {
        const catalogues = getSampleCatalogues();
        const component = createComponentWithState(catalogues);

        const wrapper = mount(component);
        expect(wrapper.find(LoadableCatalogueList).first().props().catalogues).toEqual(catalogues);
    });

    it("should pass request action to a LoadableCatalogueList component", () => {
        const listCataloguesMock = jest.fn();
        jest.doMock("../../store/catalogue/actions", {
            listCataloguesForProject: listCataloguesMock
        });

        const component = createComponentWithState();
        const wrapper = mount(component);

        expect(wrapper.find(LoadableCatalogueList).first().props().listCatalogues).toBeDefined();
    });

    it("it should pass loading state to ProjectList component", () => {
        const isLoading = true;
        const component = createComponentWithState([], isLoading);
        const wrapper = mount(component);

        expect(wrapper.find(LoadableCatalogueList).first().props().loading).toBeTruthy();
    });

    it("should pass an error to ProjectList component", () => {
        const error = true;
        const component = createComponentWithState([], false, error);
        const wrapper = mount(component);

        expect(wrapper.find(LoadableCatalogueList).first().props().hasError).toEqual(error);
    });

    function createComponentWithState(items = [], loading = false, error = false) {
        const initialState = {
            catalogues: {
                loading,
                items,
                error
            },
            projects: {

            }
        };
        const store = mockStore(initialState);

        return (
            <Provider store={store}>
                <MemoryRouter>
                    <CatalogueListContainer projectId="123" />
                </MemoryRouter>
            </Provider>
        );
    }

    function getSampleCatalogues() {
        return [
            new Catalogue("1", "My first catalogue"),
            new Catalogue("2", "My second catalogue"),
        ];
    }
});
