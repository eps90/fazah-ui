// @flow

import Project from "../../model/Project";
import {API_URL} from "./../../constants";
import "whatwg-fetch";

export function fetchProjects(params = {}): Promise<Project[]> {
    let url = new URL(`${API_URL}/api/projects.json`);
    const queryParams = prepareQueryParams(params);
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

function prepareQueryParams(params) {
    const defaults = {
        enabled: true
    };
    let result = [];
    for (const defaultParam in defaults) {
        if (!defaults.hasOwnProperty(defaultParam) || params.hasOwnProperty(defaultParam)) {
            continue;
        }

        result.push(`${encodeURIComponent(defaultParam)}=${encodeURIComponent(defaults[defaultParam])}`);
    }

    for (const param in params) {
        if (!params.hasOwnProperty(param)) {
            continue;
        }

        if (params[param] !== null) {
            result.push(`${encodeURIComponent(param)}=${encodeURIComponent(params[param])}`);
        }
    }

    return result.join("&");
}
