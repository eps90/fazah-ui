export function prepareQueryParams(params, defaults = {}) {
    let result = [];
    for (const defaultParam in defaults) {
        if (!defaults.hasOwnProperty(defaultParam) || params.hasOwnProperty(defaultParam)) {
            continue;
        }

        result.push(`${encodeURIComponent(defaultParam)}=${encodeURIComponent(defaults[defaultParam])}`);
    }

    for (const param in params) {
        if (!params.hasOwnProperty(param)) {
            continue;
        }

        if (params[param] !== null) {
            result.push(`${encodeURIComponent(param)}=${encodeURIComponent(params[param])}`);
        }
    }

    return result.join("&");
}
