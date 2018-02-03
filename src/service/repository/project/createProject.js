// @flow

import "whatwg-fetch";
import {API_URL} from "../../../constants";

export default function createProject(projectName: string, availableLanguages: string[] = []) {
    const url = `${API_URL}/api/projects.json`;
    const body = {
        name: projectName,
        available_languages: availableLanguages
    };

    return fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error("Cannot create a project");
        }

        return response;
    });
}
