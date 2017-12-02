import React from 'react';
import FazahLogo from './../../img/fazah-logo.svg';
import Box from "grommet/components/Box";

export default class Logo extends React.Component {
    render() {
        return (
            <Box className="logo" pad='medium'>
                <FazahLogo width='100%' height='auto' />
            </Box>
        );
    }
}
