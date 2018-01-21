import React from "react";
import RoutesFromConfig from "../routing/components/RoutesFromConfig";
import getContentRoutes from "../routing/helpers/getContentRoutes";

const AppRoutes = () => <RoutesFromConfig config={getContentRoutes()} />;

export default AppRoutes;
