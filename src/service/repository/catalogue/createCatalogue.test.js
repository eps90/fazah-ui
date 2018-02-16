// @flow

import fetchMock from "fetch-mock";
import createCatalogue from "./createCatalogue";
import isEqual from "lodash/isEqual";

describe("createCatalogue", () => {
    beforeEach(() => {
        fetchMock.restore();
    });

    it("should create a root catalogue", () => {
        expect.assertions(1);

        const catalogueName = "My new catalogue";
        const projectId = "ca2da12d-90f6-4dac-9a0a-143da30b9afa";
        const expectedUrl = "end:/catalogues.json";
        const expectedBody = {
            project_id: projectId,
            name: catalogueName
        };

        fetchMock.post(expectedUrl, (url, opts) => {
            const actualBody = JSON.parse(opts.body);
            const bodyMatches = isEqual(actualBody, expectedBody);
            return bodyMatches ? 201 : 500;
        });

        return createCatalogue(catalogueName, projectId).then(() => {
            expect(fetchMock.called(expectedUrl)).toBe(true);
        });
    });

    it("should create a catalogue with parent catalogue id", () => {
        expect.assertions(1);

        const catalogueName = "My new catalogue";
        const projectId = "ca2da12d-90f6-4dac-9a0a-143da30b9afa";
        const parentCatalogueId = "b2e4139e-ee25-462d-a4d6-54260c8bde52";
        const expectedUrl = "end:/catalogues.json";
        const expectedBody = {
            project_id: projectId,
            name: catalogueName,
            parent_catalogue_id: parentCatalogueId
        };

        fetchMock.post(expectedUrl, (url, opts) => {
            const actualBody = JSON.parse(opts.body);
            const bodyMatches = isEqual(actualBody, expectedBody);
            return bodyMatches ? 201 : 500;
        });

        return createCatalogue(catalogueName, projectId, parentCatalogueId).then(() => {
            expect(fetchMock.called(expectedUrl)).toBe(true);
        });
    });

    it("should throw when server return error status", () => {
        expect.assertions(1);

        const catalogueName = "My new catalogue";
        const projectId = "ca2da12d-90f6-4dac-9a0a-143da30b9afa";
        const expectedUrl = "end:/catalogues.json";

        fetchMock.post(expectedUrl, 503);

        return createCatalogue(catalogueName, projectId).catch(err => {
            expect(err).toBeDefined();
        });
    });
});