import Project from "../../model/Project";
import {getProject} from "./selectors";

describe("project selectors", () => {
    it("should return a project from already fetched projects", () => {
        const state = {
            projects: {
                items: [
                    new Project("1111", "First project"),
                    new Project("2222", "Second project"),
                ]
            }
        };
        const projectId = "1111";

        expect(getProject(state, projectId)).toEqual(state.projects.items[0]);
    });

    it("should return null when project is not found", () => {
        const state = {
            projects: {
                items: []
            }
        };
        const projectId = "1111";

        expect(getProject(state, projectId)).toBeNull();
    });
});
