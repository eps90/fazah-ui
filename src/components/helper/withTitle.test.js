import React from 'react';
import {withTitle} from "./withTitle";
import {shallow} from "enzyme";
import Title from 'grommet/components/Title';

describe('withTitle helper', () => {
    it('should render a title before wrapped component', () => {
        const titleContents = 'This is a title';
        const WrappedComponent = withTitle(titleContents)(TestComponent);
        const wrapper = shallow(<WrappedComponent />);

        expect(wrapper.find(TestComponent)).toHaveLength(1);
        expect(wrapper.find(Title)).toHaveLength(1);
    });
});

class TestComponent extends React.Component {
    render() {
        return <p>This is a test component</p>;
    }
}
