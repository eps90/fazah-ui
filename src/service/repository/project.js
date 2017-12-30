// @flow

import Project from "../../model/Project";
import {API_URL} from './../../constants';
import 'whatwg-fetch';

export function fetchProjects(): Promise<Project[]> {
    return fetch(`${API_URL}/api/projects.json`)
        .then((response) => {
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
