// @flow
import "whatwg-fetch";
import {API_URL} from "../../../constants";

export default function createCatalogue(name: string, projectId: string, parentCatalogueId: string = null) {
    const url = `${API_URL}/catalogues.json`;
    const body = {
        name,
        project_id: projectId
    };
    if (parentCatalogueId !== null) {
        body.parent_catalogue_id = parentCatalogueId;
    }

    return fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error("Error while creating a catalogue!");
        }

        return response;
    });
}