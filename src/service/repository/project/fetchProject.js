import "whatwg-fetch";
import {API_URL} from "../../../constants";
import Project from "../../../model/Project";

export default function fetchProject(projectId: string): Promise<Project> {
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
