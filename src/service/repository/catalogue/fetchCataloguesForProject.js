// @flow

import "whatwg-fetch";
import {API_URL} from "../../../constants";
import Catalogue from "../../../model/Catalogue";
import {prepareQueryParams} from "../helpers";

const defaults = {
    enabled: true
};

export default function fetchCataloguesForProject(projectId, params = {}): Promise<Catalogue> {
    let url = `${API_URL}/api/catalogues.json?project_id=${projectId}`;
    const queryParams = prepareQueryParams(params, defaults);
    if (queryParams.length) {
        url += `&${queryParams}`;
    }

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
