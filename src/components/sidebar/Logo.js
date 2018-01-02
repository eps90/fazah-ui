import React from "react";
import FazahLogo from "./../../img/fazah-logo.svg";
import Box from "grommet/components/Box";
import "./Logo.scss";

export default class Logo extends React.Component {
    render() {
        return (
            <Box>
                <FazahLogo className='logo' />
            </Box>
        );
    }
}
