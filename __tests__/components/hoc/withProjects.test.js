import React from 'react';
import withProjects from "../../../src/components/hoc/withProjects";
import {shallow} from 'enzyme';
import {
    defaultProjects,
    __reset,
    __failWhileFetchingProjects,
    fetchProjects
} from "../../../src/service/repository/project";
import Loader from "../../../src/components/Spinner";
import Message from "../../../src/components/main/message/Message";

jest.mock("../../../src/service/repository/project");

describe('withProject HOC', () => {
    beforeEach(() => {
        __reset();
    });

    it('should set fetched projects prop in given component', () => {
        expect.assertions(1);
        const Wrapped = withProjects(TestComponent);
        const wrappedInstance = shallow(<Wrapped />);

        return fetchProjects().then(() => {
            wrappedInstance.update();
            const wrappedComponent = wrappedInstance.find(TestComponent);
            expect(wrappedComponent.props()).toEqual({projects: defaultProjects});
        });
    });

    it('should render a spinner when request is in progress', () => {
        const Wrapped = withProjects(TestComponent);
        const wrappedInstance = shallow(<Wrapped />);
        wrappedInstance.update();

        const spinnerComponent = wrappedInstance.find(Loader);
        expect(spinnerComponent.length).toEqual(1);
    });


    it('should render an error when request fails', () => {
        __failWhileFetchingProjects();

        expect.assertions(1);
        const Wrapped = withProjects(TestComponent);

        const wrappedInstance = shallow(<Wrapped />);
        return fetchProjects().then().catch(() => {
            wrappedInstance.update();

            const messageInstance = wrappedInstance.find(Message);
            expect(messageInstance.length).toEqual(1);
        });
    });
});

class TestComponent extends React.Component {
    render() {
        return <h1>Hello!</h1>;
    }
}
