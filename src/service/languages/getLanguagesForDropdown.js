import languages from "../../config/languages";

export default function getLanguagesForDropdown() {
    return languages.map((lang) => {
        return {
            key: lang.countryCode,
            value: lang.countryCode,
            flag: lang.countryCode,
            text: lang.name
        };
    });
}