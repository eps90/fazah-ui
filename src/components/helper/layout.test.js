import React from "react";
import {fullContainer, smallContainer} from "./layout";
import {shallow} from "enzyme";
import FullContainer from "../layout/main/FullContainer";
import SmallContainer from "../layout/main/SmallContainer";

describe("Layout helper", () => {
    it("should render a component inside a FullContainer", () => {
        const WrappedComponent = fullContainer(TestComponent);
        const wrapper = shallow(<WrappedComponent />);

        expect(wrapper.find(FullContainer)).toHaveLength(1);
        expect(wrapper.find(FullContainer).find(TestComponent)).toHaveLength(1);
    });

    it("should render a component inside a SmallContainer", () => {
        const WrappedComponent = smallContainer(TestComponent);
        const wrapper = shallow(<WrappedComponent />);

        expect(wrapper.find(SmallContainer)).toHaveLength(1);
        expect(wrapper.find(SmallContainer).find(TestComponent)).toHaveLength(1);
    });
});

class TestComponent extends React.Component {
    render() {
        return <p>This is my component</p>;
    }
}
