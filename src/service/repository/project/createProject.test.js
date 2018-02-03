// @flow

import fetchMock from "fetch-mock";
import createProject from "./createProject";

describe("createProject", () => {
    beforeEach(() => {
        fetchMock.restore();
    });

    it("should send a request to the server", () => {
        expect.assertions(1);

        const projectName = "New project";
        const expectedUrl = "end:/projects.json";

        fetchMock.post(expectedUrl, (url, opts) => {
            return JSON.parse(opts.body).name === projectName ? 201 : 500;
        });

        return createProject(projectName).then(() => {
            expect(fetchMock.called(expectedUrl)).toBe(true);
        });
    });

    it("should create a project with available languages", () => {
        expect.assertions(1);

        const projectName = "New project";
        const availableLanguages = ["en", "fr", "pl"];
        const expectedUrl = "end:/projects.json";

        fetchMock.post(expectedUrl, (url, opts) => {
            const bodyParsed = JSON.parse(opts.body);
            const projectNameMatches = bodyParsed.name === projectName;
            const langsMatch = JSON.stringify(bodyParsed.available_languages) === JSON.stringify(availableLanguages);

            return projectNameMatches && langsMatch ? 201 : 500;
        });

        return createProject(projectName, availableLanguages).then(() => {
            expect(fetchMock.called(expectedUrl)).toBe(true);
        });
    });

    it("should throw when posting fails", () => {
        expect.assertions(1);

        const expectedUrl = "end:/projects.json";
        fetchMock.post(expectedUrl, 503);

        return createProject("New project").catch((err) => {
            expect(err).toBeDefined();
        });
    });
});
