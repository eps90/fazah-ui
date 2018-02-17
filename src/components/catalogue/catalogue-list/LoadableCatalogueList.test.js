import React from "react";
import LoadableCatalogueList from "./LoadableCatalogueList";
import {shallow} from "enzyme";
import {Dimmer, Message} from "semantic-ui-react";
import CatalogueList from "./CatalogueList";

describe("LoadableCatalogueList component", () => {
    it("should show CatalogueList component", () => {
        const wrapper = shallow(getComponentUnderTest());
        expect(wrapper.find(CatalogueList)).toHaveLength(1);
    });

    it("should show a loading when component has loading state", () => {
        const wrapper = shallow(getComponentUnderTest({loading: true}));
        expect(wrapper.find(Dimmer).first().props().active).toBe(true);
    });

    it("should show a message when no catalogues are found", () => {
        const catalogues = [];
        const wrapper = shallow(getComponentUnderTest({catalogues}));
        expect(wrapper.find(Message)).toHaveLength(1);
    });

    it("should show a message when error occurs", () => {
        expect.assertions(2);
        const wrapper = shallow(getComponentUnderTest({hasError: true}));

        const messageElement = wrapper.find(Message);
        expect(messageElement).toHaveLength(1);
        expect(messageElement.props().negative).toBe(true);
    });

    function getComponentUnderTest(properties = {}) {
        const {
            loading = false,
            listCatalogues = jest.fn(),
            hasError = false,
            catalogues = []
        } = properties;

        return <LoadableCatalogueList loading={loading} listCatalogues={listCatalogues}
            hasError={hasError} catalogues={catalogues} />;
    }
});