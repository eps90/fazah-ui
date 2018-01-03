import fetchMock from "fetch-mock";
import {fetchCataloguesForProject} from "./catalogues";
import Catalogue from "../../model/Catalogue";
import Metadata from "../../model/Metadata";

describe("Fetching project's catalogues", () => {
    beforeEach(() => {
        fetchMock.restore();
    });

    it("should send a request to the server", () => {
        expect.assertions(1);

        const projectId = 1;
        const expectedEndpoint = `end:/api/catalogues.json?project_id=${projectId}&enabled=true`;

        fetchMock.get(expectedEndpoint, getSampleResponse());

        return fetchCataloguesForProject(projectId).then(() => {
            expect(fetchMock.called(expectedEndpoint)).toBe(true);
        });
    });

    describe("for project id", () => {
        it("should return a list of catalogues in a project", () => {
            expect.assertions(1);

            const projectId = 1;
            const expectedEndpoint = `end:/api/catalogues.json?project_id=${projectId}&enabled=true`;

            fetchMock.get(expectedEndpoint, getSampleResponse());

            return fetchCataloguesForProject(projectId).then(catalogues => {
                const expectedCatalogues = getSampleCatalogues();
                expect(catalogues).toEqual(expectedCatalogues);
            });
        });

        it("return an empty array when response is not an array", () => {
            expect.assertions(1);

            const projectId = 1;
            const expectedEndpoint = `end:/api/catalogues.json?project_id=${projectId}&enabled=true`;

            fetchMock.get(expectedEndpoint, {some: "objectToReturn"});

            return fetchCataloguesForProject(projectId).then(catalogues => {
                expect(catalogues).toEqual([]);
            });
        });

        it("should return an empty array when no catalogues are found", () => {
            expect.assertions(1);

            const projectId = 1;
            const expectedEndpoint = `end:/api/catalogues.json?project_id=${projectId}&enabled=true`;

            fetchMock.get(expectedEndpoint, []);

            return fetchCataloguesForProject(projectId).then(catalogues => {
                expect(catalogues).toEqual([]);
            });
        });

        it("should throw when server returns an error status code", () => {
            expect.assertions(1);

            const projectId = 1;
            const expectedEndpoint = `end:/api/catalogues.json?project_id=${projectId}&enabled=true`;

            fetchMock.get(expectedEndpoint, {body: [], status: 503});

            return fetchCataloguesForProject(projectId).catch(err => {
                expect(err).toBeDefined();
            });
        });
    });
});

function getSampleResponse() {
    return [
        {
            "id": "5a53c071-f518-41af-9b94-71044b1d5a1f",
            "name": "fifth-catalogue",
            "alias": "fifth_catalogue",
            "project_id": "4c3339d3-ad42-4614-bd83-8585cea0e54e",
            "parent_catalogue_id": null,
            "metadata": {
                "creation_time": "2015-01-01T12:00:04+00:00",
                "update_time": "2015-01-02T12:00:04+00:00",
                "enabled": false
            }
        },
        {
            "id": "8094de70-b269-4ea3-a11c-4d43a5218b23",
            "name": "forth-catalogue",
            "alias": "forth_catalogue",
            "project_id": "4c3339d3-ad42-4614-bd83-8585cea0e54e",
            "parent_catalogue_id": null,
            "metadata": {
                "creation_time": "2015-01-01T12:00:03+00:00",
                "update_time": "2015-01-02T12:00:03+00:00",
                "enabled": true
            }
        }
    ];
}

function getSampleCatalogues() {
    return [
        new Catalogue(
            "5a53c071-f518-41af-9b94-71044b1d5a1f",
            "fifth-catalogue",
            "fifth_catalogue",
            "4c3339d3-ad42-4614-bd83-8585cea0e54e",
            null,
            new Metadata(
                new Date("2015-01-01T12:00:04+00:00"),
                new Date("2015-01-02T12:00:04+00:00"),
                false
            )
        ),
        new Catalogue(
            "8094de70-b269-4ea3-a11c-4d43a5218b23",
            "forth-catalogue",
            "forth_catalogue",
            "4c3339d3-ad42-4614-bd83-8585cea0e54e",
            null,
            new Metadata(
                new Date("2015-01-01T12:00:03+00:00"),
                new Date("2015-01-02T12:00:03+00:00"),
                true
            )
        )
    ];
}
