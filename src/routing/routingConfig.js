import ProjectListContainer from "../containers/project/ProjectListContainer";
import {fullContainer, smallContainer} from "../components/helper/layout";
import CatalogueListRoute from "../components/catalogue/catalogue-list/CatalogueListRoute";

const routingConfig = {
    projects: {
        path: "/projects",
        exact: true,
        component: smallContainer(ProjectListContainer)
    },
    catalogues: {
        path: "/projects/:projectId/catalogues",
        exact: true,
        component: fullContainer(CatalogueListRoute)
    },
    homepage: {
        path: "/",
        exact: true,
        redirectTo: "/projects"
    }
};
export default routingConfig;
