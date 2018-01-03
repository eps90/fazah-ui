// @flow

import Metadata from "./Metadata";

export default class Catalogue {
    id: string;
    name: string;
    alias: string;
    projectId: string;
    parentCatalogueId: string;
    metadata: Metadata;

    constructor(
        id: string,
        name: string,
        alias: string = null,
        projectId: string = null,
        parentCatalogueId: string = null,
        metadata: Metadata = Metadata.empty()
    ) {
        this.id = id;
        this.name = name;
        this.alias = alias;
        this.projectId = projectId;
        this.parentCatalogueId = parentCatalogueId;
        this.metadata = metadata;
    }

    static fromJson(rawObject) {
        return new Catalogue(
            rawObject["id"],
            rawObject["name"],
            rawObject["alias"],
            rawObject["project_id"],
            rawObject["parent_catalogue_id"],
            Metadata.fromJson(rawObject["metadata"]),
        );
    }
}
