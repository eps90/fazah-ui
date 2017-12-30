import {runSaga} from "redux-saga";
import {failProjectListing, setProjects} from "./actions";

describe('projects sagas', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it('should set fetched projects', async () => {
        expect.assertions(1);

        const projects = [
            {id: 1, name: 'My first project'},
            {id: 2, name: 'My second project'}
        ];
        const fetchProjectList = createSagaMock(projects);

        const dispatchedActions = [];
        await runSaga({dispatch: (action) => dispatchedActions.push(action)}, fetchProjectList).done;

        expect(dispatchedActions).toEqual([setProjects(projects)]);
    });

    it('should dispatch error action when fetching projects fails', async () => {
        expect.assertions(1);

        const fetchProjectList = createFailingSagaMock();

        const dispatchedActions = [];
        await runSaga({dispatch: (action) => dispatchedActions.push(action)}, fetchProjectList).done;

        expect(dispatchedActions).toEqual([failProjectListing()]);
    });

    function createSagaMock(projectsToReturn) {
        jest.doMock("../../service/repository/project", () => ({
            fetchProjects: () => Promise.resolve(projectsToReturn)
        }));

        return require('./sagas').fetchProjectList;
    }

    function createFailingSagaMock() {
        jest.doMock("../../service/repository/project", () => ({
            fetchProjects: () => Promise.reject()
        }));

        return require('./sagas').fetchProjectList;
    }
});
