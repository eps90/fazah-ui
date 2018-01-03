// @flow

import "whatwg-fetch";
import {API_URL} from "../../constants";
import Catalogue from "../../model/Catalogue";

export function fetchCataloguesForProject(projectId): Promise<Catalogue> {
    const url = `${API_URL}/api/catalogues.json?project_id=${projectId}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error while fetching catalogues");
            }
            return response.json();
        })
        .then(catalogueData => {
            if (!Array.isArray(catalogueData)) {
                return [];
            }

            return catalogueData.map(catalogue => Catalogue.fromJson(catalogue));
        });
}
