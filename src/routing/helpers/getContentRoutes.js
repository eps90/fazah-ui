import routingConfig from "./../routingConfig";

export default function getContentRoutes() {
    const result = [];
    for (const routeName in routingConfig) {
        const route = routingConfig[routeName];
        if ("component" in route) {
            result.push(route);
        }
    }

    return result;
}
