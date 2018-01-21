import routingConfig from "./../routingConfig";

export default function getBreadcrumbsRoutes() {
    const result = [];
    for (const routeName in routingConfig) {
        const route = routingConfig[routeName];
        if ("breadcrumbs" in route) {
            result.push(route);
        }
    }

    return result;
}
