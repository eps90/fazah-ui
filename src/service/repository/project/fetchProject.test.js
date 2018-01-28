// @flow

import fetchMock from "fetch-mock";
import Project from "../../../model/Project";
import Metadata from "../../../model/Metadata";
import fetchProject from "./fetchProject";

describe("fetchProject", () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it("should return a single project", () => {
        expect.assertions(1);
        const projectId = "1231231";
        const expectedEndpoint = `end:/api/projects/${projectId}.json`;

        fetchMock.get(expectedEndpoint, getSampleServerResponse());

        const expectedProject = getParsedProjects();

        return fetchProject(projectId).then(project => {
            expect(project).toEqual(expectedProject);
        });
    });

    it("should throw when project is not found", () => {
        expect.assertions(1);

        const projectId = "1231231";
        const expectedEndpoint = `end:/api/projects/${projectId}.json`;

        fetchMock.get(expectedEndpoint, {status: 404, body: "{}"});

        return fetchProject(projectId).catch(err=> {
            expect(err).toBeDefined();
        });
    });

    it("should throw when error occurred on server side", () => {
        expect.assertions(1);

        const projectId = "1231231";
        const expectedEndpoint = `end:/api/projects/${projectId}.json`;

        fetchMock.get(expectedEndpoint, {status: 503, body: "{}"});

        return fetchProject(projectId).catch(err=> {
            expect(err).toBeDefined();
        });
    });
});

function getSampleServerResponse() {
    return {
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
    };
}

function getParsedProjects() {
    return new Project(
        "6fd6dd53-11e0-4c33-b9a0-d72af94452d7",
        "My project",
        new Metadata(
            new Date("2017-11-25T12:17:01+00:00"),
            null,
            true
        ),
        ["fr", "en"]
    );
}
