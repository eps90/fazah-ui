// @flow

import Metadata from "../../src/model/Metadata";

describe('Metadata', () => {
    it('should parse raw metadata into object', () => {
        const inputObject = {
            creation_time: "2017-11-25T12:17:01+00:00",
            update_time: "2017-07-16T17:14:32+00:00",
            enabled: true
        };
        const expectedResult = new Metadata(
            new Date("2017-11-25T12:17:01+00:00"),
            new Date("2017-07-16T17:14:32+00:00"),
            true
        );
        const actualResult = Metadata.fromJson(inputObject);

        expect(expectedResult).toEqual(actualResult);
    });

    it('should set update time to null if it is not provided', () => {
        const inputObject = {
            creation_time: "2017-11-25T12:17:01+00:00",
            update_time: null,
            enabled: true
        };
        const expectedResult = new Metadata(
            new Date("2017-11-25T12:17:01+00:00"),
            null,
            true
        );
        const actualResult = Metadata.fromJson(inputObject);

        expect(expectedResult).toEqual(actualResult);
    });
});
