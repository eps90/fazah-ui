describe("getLanguagesForDropdown function", () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it("should return languages mapped for dropdown", () => {
        const inputLanguages = [
            {name: "English", countryCode: "gb"},
            {name: "French", countryCode: "fr"},
            {name: "Polish", countryCode: "pl"},
        ];
        const expectedResult = [
            {key: "gb", text: "English", flag: "gb", value: "gb"},
            {key: "fr", text: "French", flag: "fr", value: "fr"},
            {key: "pl", text: "Polish", flag: "pl", value: "pl"},
        ];
        const actualResult = getFunctionUnderTest(inputLanguages)();

        expect(actualResult).toEqual(expectedResult);
    });

    function getFunctionUnderTest(languages) {
        jest.doMock("../../config/languages", () => {
            return languages;
        });

        return require("./getLanguagesForDropdown").default;
    }
});