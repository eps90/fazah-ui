import React from "react";
import NewProject from "./NewProject";
import {mount, shallow} from "enzyme";
import {Dropdown, Form, Message} from "semantic-ui-react";

describe("NewProject component", () => {
    describe("UI", () => {
        it("should display a form", () => {
            const wrapper = shallow(createComponentUnderTest());

            expect(wrapper.find(Form)).toHaveLength(1);
            expect(wrapper.find(Form.Input)).toHaveLength(1);
            expect(wrapper.find(Form.Field)).toHaveLength(1);
        });

        it("should show 'name' field as required", () => {
            const wrapper = shallow(createComponentUnderTest());

            expect(wrapper.find(Form.Input).first().prop("required")).toBeTruthy();
        });

        it("should display a spinner when the form is loading", () => {
            const wrapper = shallow(createComponentUnderTest({loading: true}));

            expect(wrapper.find(Form).first().prop("loading")).toBeTruthy();
        });

        it("should display a list of available languages", () => {
            const languages = [
                {key: "gb", text: "English", flag: "gb", value: "gb"},
                {key: "pl", text: "Polish", flag: "pl", value: "pl"},
                {key: "fr", text: "French", flag: "fr", value: "fr"},
            ];
            const wrapper = mount(createComponentUnderTest({languages}));

            expect(wrapper.find(Dropdown)).toHaveLength(1);

            const foundItems = wrapper.find(Dropdown.Item);
            expect(foundItems).toHaveLength(3);
            expect(foundItems.first().prop("flag")).toEqual("gb");
            expect(foundItems.first().text()).toEqual("English");
        });

        it("should set an error state in case of error", () => {
            const wrapper = shallow(createComponentUnderTest({error: true}));

            expect(wrapper.find(Form).first().prop("error")).toBeTruthy();
        });

        it("should display an error in case of error", () => {
            const wrapper = shallow(createComponentUnderTest({error: true}));

            expect(wrapper.find(Message)).toHaveLength(1);
        });
    });

    describe("Behavior", () => {
        it("should call addNewProject function on submit", () => {
            const addNewProject = jest.fn();
            const wrapper = mount(createComponentUnderTest({addNewProject}));

            wrapper.find("input#projectName").simulate("change", {
                target: {
                    value: "My project name"
                }
            });
            const submitButton = wrapper.find("button#submit");
            submitButton.simulate("submit");

            const expectedParams = {name: "My project name", availableLangs: []};
            expect(addNewProject).toHaveBeenCalledWith(expectedParams);
        });

        it("should have disabled button when project name is empty", () => {
            const wrapper = mount(createComponentUnderTest());

            wrapper.find("input#projectName").simulate("change", {
                target: {
                    value: ""
                }
            });

            expect(wrapper.find("button#submit").prop("disabled")).toBeTruthy();
        });
    });

    function createComponentUnderTest(properties = {}) {
        const {
            loading = false,
            addNewProject = jest.fn(),
            languages = [],
            error = false
        } = properties;

        return <NewProject error={error} loading={loading} addNewProject={addNewProject} languages={languages}/>;
    }
});