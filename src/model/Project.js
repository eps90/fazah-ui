// @flow

import Metadata from "./Metadata";

export default class Project {
    id: string;
    name: string;
    metadata: Metadata;
    availableLanguages: string[];

    constructor(id: string, name: string, metadata: Metadata = Metadata.empty(), availableLanguages: string[] = []) {
        this.id = id;
        this.name = name;
        this.metadata = metadata;
        this.availableLanguages = availableLanguages;
    }

    static fromJson(rawObj): Project {
        return new Project(
            rawObj["id"],
            rawObj["name"],
            Metadata.fromJson(rawObj["metadata"]),
            rawObj["config"]["available_languages"]
        );
    }
}
