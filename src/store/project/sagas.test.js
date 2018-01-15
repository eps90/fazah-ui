import {expectSaga, testSaga} from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import {throwError} from "redux-saga-test-plan/providers";
import {
    failProjectListing, listProjects, selectProject, selectProjectFailure, selectProjectSuccess,
    setProjects
} from "./actions";
import watchProjects, {fetchProjectList, selectOrFetchProject} from "./sagas";
import {fetchProject, fetchProjects} from "../../service/repository/project";
import {getProject} from "./../selectors";

describe("projects sagas", () => {
    describe("Fetch all projects", () => {
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

    describe("Select project", () => {
        describe("unit", () => {
            it("should select a project from available projects", () => {
                const projectId = "1111";
                const foundProject = {"id": "1111", "name": "My awesome project"};

                testSaga(selectOrFetchProject, {projectId})
                    .next()
                    .select(getProject, projectId)
                    .next(foundProject)
                    .put(selectProjectSuccess(foundProject))
                    .next()
                    .isDone();
            });

            it("should fetch a project when it is not found in the store", () => {
                const projectId = "1111";
                const fetchedProject = {"id": "1111", "name": "My awesome project"};

                testSaga(selectOrFetchProject, {projectId})
                    .next()
                    .select(getProject, projectId)
                    .next(null)
                    .call(fetchProject, projectId)
                    .next(fetchedProject)
                    .put(selectProjectSuccess(fetchedProject))
                    .next()
                    .isDone();
            });

            it("should send an error when fetching a project fails", () => {
                const projectId = "1111";

                testSaga(selectOrFetchProject, {projectId})
                    .next()
                    .select(getProject, projectId)
                    .next(null)
                    .call(fetchProject, projectId)
                    .throw()
                    .put(selectProjectFailure())
                    .next()
                    .isDone();
            });
        });

        describe("integration", () => {
            it("should select a project from available projects", () => {
                const projectId = "1111";
                const foundProject = {"id": "1111", "name": "My awesome project"};

                return expectSaga(watchProjects)
                    .provide([
                        [matchers.select(getProject, projectId), foundProject]
                    ])
                    .put(selectProjectSuccess(foundProject))
                    .dispatch(selectProject(projectId))
                    .silentRun();
            });

            it("should fetch a project when it is not found in the store", () => {
                const projectId = "1111";
                const fetchedProject = {"id": "1111", "name": "My awesome project"};

                return expectSaga(watchProjects)
                    .provide([
                        [matchers.select(getProject, projectId), null],
                        [matchers.call.fn(fetchProject, projectId), fetchedProject]
                    ])
                    .put(selectProjectSuccess(fetchedProject))
                    .dispatch(selectProject(projectId))
                    .silentRun();
            });

            it("should send an error when fetching a project fails", () => {
                const projectId = "1111";

                return expectSaga(watchProjects)
                    .provide([
                        [matchers.select(getProject, projectId), null],
                        [matchers.call.fn(fetchProject, projectId), throwError("Fetching project failed!")]
                    ])
                    .put(selectProjectFailure())
                    .dispatch(selectProject(projectId))
                    .silentRun();
            });
        });
    });
});
