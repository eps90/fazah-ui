import Catalogue from "./Catalogue";
import Metadata from "./Metadata";

describe("Catalogue model", () => {
    it("should be possible to create a Catalogue instance from JSON", () => {
        const inputJson = {
            id: "8094de70-b269-4ea3-a11c-4d43a5218b23",
            name: "forth-catalogue",
            alias: "forth_catalogue",
            project_id: "4c3339d3-ad42-4614-bd83-8585cea0e54e",
            parent_catalogue_id: "4c3339d3-ad42-4614-bd83-8585cea0e54e",
            metadata: {
                creation_time: "2015-01-01T12:00:03+00:00",
                update_time: "2015-01-02T12:00:03+00:00",
                enabled: true
            }
        };
        const expectedResult = new Catalogue(
            "8094de70-b269-4ea3-a11c-4d43a5218b23",
            "forth-catalogue",
            "forth_catalogue",
            "4c3339d3-ad42-4614-bd83-8585cea0e54e",
            "4c3339d3-ad42-4614-bd83-8585cea0e54e",
            new Metadata(
                new Date("2015-01-01T12:00:03+00:00"),
                new Date("2015-01-02T12:00:03+00:00"),
                true
            )
        );

        expect(Catalogue.fromJson(inputJson)).toEqual(expectedResult);
    });
});
