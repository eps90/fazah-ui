import {expectSaga, testSaga} from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import {throwError} from "redux-saga-test-plan/providers";
import {failProjectListing, listProjects, setProjects} from "./actions";
import watchProjects, {fetchProjectList} from "./sagas";
import {fetchProjects} from "../../service/repository/project";

describe("projects sagas", () => {
    describe("unit", () => {
        it("should dispatch action with fetched projects", () => {
            const projectsFetched = [{id: 1}, {id: 2}];
            testSaga(fetchProjectList)
                .next()
                .call(fetchProjects)
                .next(projectsFetched)
                .put(setProjects(projectsFetched))
                .next()
                .isDone();
        });

        it("should dispatch error action when fetching projects fails", () => {
            testSaga(fetchProjectList)
                .next()
                .call(fetchProjects)
                .throw()
                .put(failProjectListing())
                .next()
                .isDone();
        });
    });

    describe("integration", () => {
        it("should dispatch fetched projects", () => {
            const projectsFetched = [
                {id: 1, name: "My first project"},
                {id: 2, name: "My second project"}
            ];

            return expectSaga(watchProjects)
                .provide([
                    [matchers.call.fn(fetchProjects), projectsFetched]
                ])
                .put(setProjects(projectsFetched))
                .dispatch(listProjects())
                .silentRun();
        });

        it("should dispatch error when fetching projects fails", () => {
            return expectSaga(watchProjects)
                .provide([
                    [matchers.call.fn(fetchProjects), throwError("Fetching projects failed!")]
                ])
                .put(failProjectListing())
                .dispatch(listProjects())
                .silentRun();
        });
    });
});
