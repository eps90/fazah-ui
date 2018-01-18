import Catalogue from "../../model/Catalogue";
import watchCatalogues, {fetchCatalogues} from "./sagas";
import {fetchCataloguesForProject} from "../../service/repository/catalogues";
import {expectSaga, testSaga} from "redux-saga-test-plan";
import {throwError} from "redux-saga-test-plan/providers";
import {call} from "redux-saga/effects";
import {failCataloguesListing, listCataloguesForProject, setCatalogues} from "./actions";
import {selectProject} from "../project/actions";

describe("Catalogue sagas", () => {
    describe("unit", () => {
        it("should dispatch action with fetched catalogues", () => {
            const projectId = "3212";
            const cataloguesFetched = [
                new Catalogue("1231", "first catalogue"),
                new Catalogue("3213", "second catalogue"),
            ];

            testSaga(fetchCatalogues, {projectId})
                .next()
                .put(selectProject(projectId))
                .next()
                .call(fetchCataloguesForProject, projectId)
                .next(cataloguesFetched)
                .put(setCatalogues(cataloguesFetched))
                .next()
                .isDone();
        });

        it("should dispatch an error action when catalogues fetching fails", () => {
            const projectId = "321312";
            testSaga(fetchCatalogues, {projectId})
                .next()
                .put(selectProject(projectId))
                .next()
                .call(fetchCataloguesForProject, projectId)
                .throw()
                .put(failCataloguesListing())
                .next()
                .isDone();
        });
    });

    describe("integration", () => {
        const projectId = "321";

        it("should dispatch an action with fetched catalogues", () => {
            const cataloguesFetched = [
                new Catalogue("1231", "first catalogue"),
                new Catalogue("3213", "second catalogue"),
            ];

            return expectSaga(watchCatalogues)
                .provide([
                    [call(fetchCataloguesForProject, projectId), cataloguesFetched]
                ])
                .put(setCatalogues(cataloguesFetched))
                .dispatch(listCataloguesForProject(projectId))
                .silentRun();
        });

        it("should dispatch an error event when fetching catalogues fails", () => {
            return expectSaga(watchCatalogues)
                .provide([
                    [call(fetchCataloguesForProject, projectId), throwError()]
                ])
                .put(failCataloguesListing())
                .dispatch(listCataloguesForProject(projectId))
                .silentRun();
        });
    });
});
