// @flow

export default class Metadata {
    _createdAt: Date;
    _updatedAt: Date;
    _enabled: boolean;

    constructor(createdAt: Date, updatedAt: Date, enabled: boolean) {
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
        this._enabled = enabled;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    get enabled(): boolean {
        return this._enabled;
    }

    static empty() {
        return new this(new Date(), new Date(), true);
    }
}
