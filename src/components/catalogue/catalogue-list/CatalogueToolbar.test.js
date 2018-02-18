import React from "react";
import CatalogueToolbar from "./CatalogueToolbar";
import {Button, Input} from "semantic-ui-react";
import {shallow} from "enzyme";
import {addNewProject} from "../../../store/newProject/actions";

describe("CatalogueToolbar component", () => {
    it("should render a new catalogue button", () => {
        const wrapper = shallow(getComponentUnderTest());
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    it("should show a catalogue name input on button click", () => {
        const wrapper = shallow(getComponentUnderTest());
        const newCatalogueBtn = wrapper.find(Button);

        expect(wrapper.find(Input)).toHaveLength(0);
        newCatalogueBtn.simulate("click");

        expect(wrapper.find(Input)).toHaveLength(1);
    });

    it("can be initially active", () => {
        const wrapper = shallow(getComponentUnderTest({active: true}));
        expect(wrapper.find(Input)).toHaveLength(1);
    });

    it("should hide button when its clicked", () => {
        const wrapper = shallow(getComponentUnderTest());
        clickNewCatalogueBtn(wrapper);

        expect(wrapper.find(Button)).toHaveLength(0);
    });

    it("should have loading state when it is loading", () => {
        const wrapper = shallow(getComponentUnderTest({loading: true}));
        clickNewCatalogueBtn(wrapper);

        expect(wrapper.find(Input).first().prop("loading")).toBe(true);
    });

    it("should call addCatalogue action when enter is pressed on input", () => {
        const projectId = "05e7f38c-75a3-4e0a-8390-36fc429ff9ca";
        const addNewCatalogue = jest.fn();
        const wrapper = shallow(getComponentUnderTest({projectId, addNewCatalogue}));
        clickNewCatalogueBtn(wrapper);

        const catalogueName = "My new awesome catalogue";
        const catalogueNameInput = wrapper.find(Input);
        catalogueNameInput.simulate("change", {
            target: {
                value: catalogueName
            }
        });
        catalogueNameInput.simulate("keyDown", {key: "Enter", keyCode: 13});

        expect(addNewCatalogue).toHaveBeenCalledWith({projectId, name: catalogueName});
    });

    it("should call addCatalogue with parent catalogueId", () => {
        const projectId = "05e7f38c-75a3-4e0a-8390-36fc429ff9ca";
        const parentId = "dfcc3fc5-fbb1-4759-85d5-b817568764f8";
        const addNewCatalogue = jest.fn();
        const wrapper = shallow(getComponentUnderTest({projectId, addNewCatalogue, parentId}));
        clickNewCatalogueBtn(wrapper);

        const catalogueName = "My new awesome catalogue";
        const catalogueNameInput = wrapper.find(Input);
        catalogueNameInput.simulate("change", {
            target: {
                value: catalogueName
            }
        });
        catalogueNameInput.simulate("keyDown", {key: "Enter", keyCode: 13});

        expect(addNewCatalogue).toHaveBeenCalledWith({projectId, name: catalogueName, parentId});
    });

    it("should back to initial state when escape is pressed", () => {
        const projectId = "05e7f38c-75a3-4e0a-8390-36fc429ff9ca";
        const addNewCatalogue = jest.fn();
        const wrapper = shallow(getComponentUnderTest({projectId, addNewCatalogue}));
        clickNewCatalogueBtn(wrapper);

        const catalogueNameInput = wrapper.find(Input);
        catalogueNameInput.simulate("keyDown", {key: "Escape", keyCode: 27});

        expect(wrapper.find(Input)).toHaveLength(0);
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    function getComponentUnderTest(properties = {}) {
        const {
            addNewCatalogue = jest.fn(),
            projectId = "99e9bcf1-b4a5-45b1-a9aa-a6d00f93929d",
            loading = false,
            parentId = undefined,
            active = false
        } = properties;
        return <CatalogueToolbar addNewProject={addNewProject} projectId={projectId}
            addNewCatalogue={addNewCatalogue} loading={loading} parentId={parentId}
            active={active}
        />;
    }

    function clickNewCatalogueBtn(wrapper) {
        wrapper.find(Button).simulate("click");
    }
});