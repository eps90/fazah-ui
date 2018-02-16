import {expectSaga, testSaga} from "redux-saga-test-plan";
import {throwError} from "redux-saga-test-plan/providers";
import watchCatalogueEdit, {addCatalogue} from "./sagas";
import * as matchers from "redux-saga-test-plan/matchers";
import createCatalogue from "../../service/repository/catalogue/createCatalogue";
import {addNewCatalogue, addNewCatalogueFailure, addNewCatalogueSuccess} from "./actions";

describe("catalogueEdit sagas", () => {
    describe("unit", () => {
        it("should create a root catalogue", () => {
            const projectId = "b2e4139e-ee25-462d-a4d6-54260c8bde52";
            const name = "My new catalogue";
            const newProjectProperties = {projectId, name};

            testSaga(addCatalogue, {properties: newProjectProperties})
                .next()
                .call(createCatalogue, name, projectId, undefined)
                .next()
                .put(addNewCatalogueSuccess())
                .next()
                .isDone();
        });

        it("should create a second level catalogue", () => {
            const projectId = "b2e4139e-ee25-462d-a4d6-54260c8bde52";
            const parentId = "05e7f38c-75a3-4e0a-8390-36fc429ff9ca";
            const name = "My new catalogue";
            const newProjectProperties = {projectId, name, parentId};

            testSaga(addCatalogue, {properties: newProjectProperties})
                .next()
                .call(createCatalogue, name, projectId, parentId)
                .next()
                .put(addNewCatalogueSuccess())
                .next()
                .isDone();
        });

        it("should dispatch error action when it fails", () => {
            const projectId = "b2e4139e-ee25-462d-a4d6-54260c8bde52";
            const parentId = "05e7f38c-75a3-4e0a-8390-36fc429ff9ca";
            const name = "My new catalogue";
            const newProjectProperties = {projectId, name, parentId};

            testSaga(addCatalogue, {properties: newProjectProperties})
                .next()
                .call(createCatalogue, name, projectId, parentId)
                .throw()
                .put(addNewCatalogueFailure())
                .next()
                .isDone();
        });
    });

    describe("integration", () => {
        it("should create a root catalogue", () => {
            const projectId = "b2e4139e-ee25-462d-a4d6-54260c8bde52";
            const name = "My new catalogue";
            const newProjectProperties = {projectId, name};

            return expectSaga(watchCatalogueEdit)
                .provide([
                    [matchers.call.fn(createCatalogue, name, projectId, undefined)]
                ])
                .put(addNewCatalogueSuccess())
                .dispatch(addNewCatalogue(newProjectProperties))
                .silentRun();
        });

        it("should create a second level catalogue", () => {
            const projectId = "b2e4139e-ee25-462d-a4d6-54260c8bde52";
            const parentId = "05e7f38c-75a3-4e0a-8390-36fc429ff9ca";
            const name = "My new catalogue";
            const newProjectProperties = {projectId, name, parentId};

            return expectSaga(watchCatalogueEdit)
                .provide([
                    [matchers.call.fn(createCatalogue, name, projectId, parentId)]
                ])
                .put(addNewCatalogueSuccess())
                .dispatch(addNewCatalogue(newProjectProperties))
                .silentRun();
        });

        it("should dispatch error action when it fails", () => {
            const projectId = "b2e4139e-ee25-462d-a4d6-54260c8bde52";
            const parentId = "05e7f38c-75a3-4e0a-8390-36fc429ff9ca";
            const name = "My new catalogue";
            const newProjectProperties = {projectId, name, parentId};

            return expectSaga(watchCatalogueEdit)
                .provide([
                    [matchers.call.fn(createCatalogue, name, projectId, parentId), throwError()]
                ])
                .put(addNewCatalogueFailure())
                .dispatch(addNewCatalogue(newProjectProperties))
                .silentRun();
        });
    });
});