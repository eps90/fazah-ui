import routingConfig from "./../routingConfig";

export default function getSidebarRoutes() {
    const result = [];
    for (const routeName in routingConfig) {
        const route = routingConfig[routeName];
        if ("sidebar" in route) {
            const {sidebar, ...rest} = route;
            result.push({
                component: sidebar,
                ...rest
            });
        }
    }

    return result;
}
