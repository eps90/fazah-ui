// @flow

import Project from "../../model/Project";
import {API_URL} from "./../../constants";
import "whatwg-fetch";
import {prepareQueryParams} from "./helpers";

const defaultQueryParams = {
    enabled: true
};

export function fetchProjects(params = {}): Promise<Project[]> {
    let url = new URL(`${API_URL}/api/projects.json`);
    const queryParams = prepareQueryParams(params, defaultQueryParams);
    if (queryParams.length) {
        url += `?${queryParams}`;
    }

    return fetch(url.toString())
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error fetching projects");
            }

            return response.json();
        })
        .then((jsonResponse) => {
            if (!Array.isArray(jsonResponse)) {
                return [];
            }
            return jsonResponse.map((rawProject) => {
                return Project.fromJson(rawProject);
            });
        });
}

export function fetchProject(projectId: string): Promise<Project> {
    const url = `${API_URL}/api/projects/${projectId}.json`;
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error fetching a project with id ${projectId}`);
            }

            return res.json();
        })
        .then(jsonResponse => Project.fromJson(jsonResponse));
}
