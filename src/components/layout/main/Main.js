import React from "react";
import Header from "../header/Header";
import Box from "grommet/components/Box";
import AppRoutes from "../../AppRoutes";

export default class Main extends React.Component {
    render() {
        return (
            <Box>
                <Header />
                <Box pad='medium'>
                    <AppRoutes />
                </Box>
            </Box>
        );
    }
}
