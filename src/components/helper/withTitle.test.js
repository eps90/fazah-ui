import React from "react";
import {withTitle} from "./withTitle";
import {shallow} from "enzyme";
import {Header} from "semantic-ui-react";

describe("withTitle helper", () => {
    it("should render a title before wrapped component", () => {
        const titleContents = "This is a title";
        const WrappedComponent = withTitle(titleContents)(TestComponent);
        const wrapper = shallow(<WrappedComponent />);

        expect(wrapper.find(TestComponent)).toHaveLength(1);
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    describe("Sub header", () => {
        it("should not render a sub-header when it's not provided in props", () => {
            const titleContents = "This is a title";
            const WrappedComponent = withTitle(titleContents)(TestComponent);
            const wrapper = shallow(<WrappedComponent />);

            expect(wrapper.find(Header.Subheader)).toHaveLength(0);
        });

        it("should display a subtitle when it is passed in props", () => {
            const titleContents = "This is a title";
            const subtitleContents = "This is a subtitle";

            const WrappedComponent = withTitle(titleContents)(TestComponent);
            const wrapper = shallow(<WrappedComponent subtitle={subtitleContents} />);

            expect(wrapper.find(Header.Subheader)).toHaveLength(1);
        });

        it("should not pass subtitle prop to wrapped component", () => {
            const titleContents = "This is a title";
            const subtitleContents = "This is a subtitle";

            const WrappedComponent = withTitle(titleContents)(TestComponent);
            const wrapper = shallow(<WrappedComponent subtitle={subtitleContents} otherProp="blablabla" />);

            expect(wrapper.find(TestComponent).first().props().subtitle).not.toBeDefined();
        });
    });
});

class TestComponent extends React.Component {
    render() {
        return <p>This is a test component</p>;
    }
}
