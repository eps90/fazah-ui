import React from 'react';
import Search from "grommet/components/Search";
import Box from "grommet/components/Box";

export default class SearchBar extends React.Component {
    render() {
        return (
            <Box>
                <Search placeHolder="Search" fill={true} inline={true}/>
            </Box>
        );
    }
}
