export default class Project {
    id = '';
    name = '';
    metadata = {};
    availableLanguages = [];

    constructor(id, name, metadata = {}, availableLanguages = []) {
        this.id = id;
        this.name = name;
        this.metadata = metadata;
        this.availableLanguages = availableLanguages;
    }
}
