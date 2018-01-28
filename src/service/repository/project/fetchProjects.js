// @flow

import "whatwg-fetch";
import Project from "../../../model/Project";
import {prepareQueryParams} from "../helpers";
import {API_URL} from "../../../constants";

const defaultQueryParams = {
    enabled: true
};

export default function fetchProjects(params = {}): Promise<Project[]> {
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
