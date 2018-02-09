import {addNewProject, addingProjectFailure, addingProjectSuccess} from "./actions";
import {expectSaga, testSaga} from "redux-saga-test-plan";
import watchNewProject, {addProject} from "./sagas";
import {createProject} from "../../service/repository/project";
import * as matchers from "redux-saga-test-plan/matchers";
import {throwError} from "redux-saga-test-plan/providers";

describe("newProject saga", () => {
    describe("unit", () => {
        it("should create a project", () => {
            const name = "My project";
            const availableLangs = ["pl", "en"];
            const projectProps = {
                name, availableLangs
            };

            testSaga(addProject, {properties: projectProps})
                .next()
                .call(createProject, name, availableLangs)
                .next()
                .put(addingProjectSuccess())
                .next()
                .isDone();
        });

        it("should fail when creating a project fails", () => {
            const name = "My project";
            const availableLangs = ["pl", "en"];
            const projectProps = {
                name, availableLangs
            };

            testSaga(addProject, {properties: projectProps})
                .next()
                .call(createProject, name, availableLangs)
                .throw()
                .put(addingProjectFailure())
                .next()
                .isDone();
        });
    });

    describe("integration", () => {
        it("should create a project", () => {
            const name = "My project";
            const availableLangs = ["pl", "en"];
            const projectProps = {
                name,
                availableLangs
            };

            return expectSaga(watchNewProject)
                .provide([
                    [matchers.call.fn(createProject, name, availableLangs)]
                ])
                .put(addingProjectSuccess())
                .dispatch(addNewProject(projectProps))
                .silentRun();
        });

        it("should fail when creating a project fails", () => {
            const name = "My project";
            const availableLangs = ["pl", "en"];
            const projectProps = {
                name,
                availableLangs
            };

            return expectSaga(watchNewProject)
                .provide([
                    [matchers.call.fn(createProject, name, availableLangs), throwError("Creating project failed")]
                ])
                .put(addingProjectFailure())
                .dispatch(addNewProject(projectProps))
                .silentRun();
        });
    });
});