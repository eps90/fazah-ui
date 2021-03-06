// @flow

import fetchMock from "fetch-mock";
import fetchProjects from "./fetchProjects";
import Project from "../../../model/Project";
import Metadata from "../../../model/Metadata";

describe("fetchProjects", () => {
    const defaultProjectsUrl = "end:/api/projects.json?enabled=true";

    afterEach(() => {
        fetchMock.restore();
    });

    it("should send a request to the server", () => {
        expect.assertions(1);

        fetchMock.get(defaultProjectsUrl, getSampleServerResponse());
        return fetchProjects().then(() => {
            expect(fetchMock.called(defaultProjectsUrl)).toBe(true);
        });
    });

    it("should return a list of all projects", () => {
        expect.assertions(1);
        fetchMock.get(defaultProjectsUrl, getSampleServerResponse());

        return fetchProjects().then(actualResult => {
            expect(actualResult).toEqual(getParsedProjects());
        });
    });

    it("should return an empty array in case of no project", () => {
        expect.assertions(1);
        fetchMock.get(defaultProjectsUrl, []);

        return fetchProjects().then(actualResult => {
            const expectedResult = [];
            expect(actualResult).toEqual(expectedResult);
        });
    });

    it("should return an empty array in case when server response is wrongly formatted", () => {
        expect.assertions(1);
        fetchMock.get(defaultProjectsUrl, {someKey: "someValue"});

        return fetchProjects().then(actualResponse => {
            const expectedResult = [];
            expect(actualResponse).toEqual(expectedResult);
        });
    });

    it("should throw an error when server returns an error status code", () => {
        expect.assertions(1);

        fetchMock.get(defaultProjectsUrl, {status: 503, body: getSampleServerResponse()});
        return fetchProjects().catch(err => {
            expect(err).toBeDefined();
        });
    });

    describe("with params", () => {
        it("should be able to ask only for disabled projects", () => {
            const requestParams = {enabled: false};
            const expectedEndpoint = "end:/api/projects.json?enabled=false";

            fetchMock.get(expectedEndpoint, getSampleServerResponse());

            return fetchProjects(requestParams).then(() => {
                expect(fetchMock.called(expectedEndpoint)).toBe(true);
            });
        });

        it("should be able to ask with phrase", () => {
            const requestParams = {phrase: "my-p"};
            const expectedEndpoint = "end:/api/projects.json?enabled=true&phrase=my-p";

            fetchMock.get(expectedEndpoint, getSampleServerResponse());

            return fetchProjects(requestParams).then(() => {
                expect(fetchMock.called(expectedEndpoint)).toBe(true);
            });
        });

        it("should ask with multiple params", () => {
            const requestParams = {
                enabled: true,
                phrase: "this-is-a-phrase"
            };
            const expectedEndpoint = "end:/api/projects.json?enabled=true&phrase=this-is-a-phrase";

            fetchMock.get(expectedEndpoint, getSampleServerResponse());

            return fetchProjects(requestParams).then(() => {
                expect(fetchMock.called(expectedEndpoint)).toBe(true);
            });
        });
    });
});

function getSampleServerResponse() {
    return [
        {
            "id": "6fd6dd53-11e0-4c33-b9a0-d72af94452d7",
            "name": "My project",
            "metadata": {
                "creation_time": "2017-11-25T12:17:01+00:00",
                "update_time": null,
                "enabled": true
            },
            "config": {
                "available_languages": ["fr", "en"]
            }
        },
        {
            "id": "9ce44f22-e01f-4c46-bc67-e97f0e59a282",
            "name": "This is an awesome project",
            "metadata": {
                "creation_time": "2017-07-01T21:24:37+00:00",
                "update_time": "2017-07-16T17:14:32+00:00",
                "enabled": false
            },
            "config": {
                "available_languages": ["fr"]
            }
        }
    ];
}

function getParsedProjects() {
    return [
        new Project(
            "6fd6dd53-11e0-4c33-b9a0-d72af94452d7",
            "My project",
            new Metadata(
                new Date("2017-11-25T12:17:01+00:00"),
                null,
                true
            ),
            ["fr", "en"]
        ),
        new Project(
            "9ce44f22-e01f-4c46-bc67-e97f0e59a282",
            "This is an awesome project",
            new Metadata(
                new Date("2017-07-01T21:24:37+00:00"),
                new Date("2017-07-16T17:14:32+00:00"),
                false
            ),
            ["fr"]
        )
    ];
}
