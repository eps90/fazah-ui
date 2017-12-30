// @flow

export default class Metadata {
    constructor(createdAt: Date, updatedAt: ?Date, enabled: boolean) {
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.enabled = enabled;
    }

    static empty() {
        return new this(new Date(), new Date(), true);
    }

    static fromJson(rawObj): Metadata {
        return new Metadata(
            new Date(rawObj['creation_time']),
            rawObj['update_time'] ? new Date(rawObj['update_time']) : null,
            rawObj['enabled']
        );
    }
}
