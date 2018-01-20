import routingConfig from "./../routingConfig";

const paramRegex = /:([^/]+)/g;

export default function routePath(routeName, ...routeParams) {
    if (!(routeName in routingConfig)) {
        throw new Error(`Route ${routeName} not found!`);
    }

    let path = routingConfig[routeName].path;
    let params = routeParams;
    let match;
    while ((match = paramRegex.exec(path)) !== null) {
        if (!params.length) {
            throw new Error(`Too less params for the route ${routeName}`);
        }
        path = path.replace(match[0], params.shift());
    }

    return path;
}
