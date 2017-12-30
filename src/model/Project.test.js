import Project from "./Project";
import Metadata from "./Metadata";

describe('Project', () => {
    it('should parse raw object into Project instance', () => {
        const inputData = {
            "id": "6fd6dd53-11e0-4c33-b9a0-d72af94452d7",
            "name": "My project",
            "metadata": {
                "creation_time": "2017-11-25T12:17:01+00:00",
                "update_time": "2017-11-25T12:17:01+00:00",
                "enabled": true
            },
            "config": {
                "available_languages": ['fr', 'en']
            }
        };
        const expectedResult = new Project(
            "6fd6dd53-11e0-4c33-b9a0-d72af94452d7",
            "My project",
            new Metadata(
                new Date("2017-11-25T12:17:01+00:00"),
                new Date("2017-11-25T12:17:01+00:00"),
                true
            ),
            ['fr', 'en']
        );
        const actualResult = Project.fromJson(inputData);

        expect(expectedResult).toEqual(actualResult);
    })
});
