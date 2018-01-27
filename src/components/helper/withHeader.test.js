import React from "react";
import {withHeader} from "./withHeader";
import {shallow} from "enzyme";
import {Header} from "semantic-ui-react";

describe("withHeader helper", () => {
    describe("Title", () => {
        it("should render a title before wrapped component", () => {
            const properties = {
                title: "This is a title"
            };
            const wrapper = shallow(getComponentUnderTest(properties));

            expect(wrapper.find(TestComponent)).toHaveLength(1);
            expect(wrapper.find(Header)).toHaveLength(1);
        });
    });

    describe("Sub header", () => {
        it("should not render a sub-header when it's not provided in props", () => {
            const properties = {
                title: "This is a title"
            };
            const wrapper = shallow(getComponentUnderTest(properties));

            expect(wrapper.find(Header.Subheader)).toHaveLength(0);
        });

        it("should display a subtitle when it is passed in props", () => {
            const properties = {
                title: "This is a title",
                subtitle: "This is a subtitle"
            };
            const wrapper = shallow(getComponentUnderTest(properties));

            expect(wrapper.find(Header.Subheader)).toHaveLength(1);
        });

        it("should not pass subtitle prop to wrapped component", () => {
            const properties = {
                title: "This is a title",
                subtitle: "This is a subtitle",
                otherProp: "aaaaaa"
            };
            const wrapper = shallow(getComponentUnderTest(properties));

            expect(wrapper.find(TestComponent).first().props().subtitle).not.toBeDefined();
        });
    });
});

class TestComponent extends React.Component {
    render() {
        return <p>This is a test component</p>;
    }
}

function getComponentUnderTest(properties) {
    const WrappedComponent = withHeader(TestComponent);
    return <WrappedComponent {...properties} />;

}
