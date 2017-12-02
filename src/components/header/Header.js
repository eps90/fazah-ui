import React from 'react';
import SearchBar from "./SearchBar";
import ProfileButton from "./ProfileButton";
import Box from "grommet/components/Box";
import GrommetHeader from 'grommet/components/Header';

export default class Header extends React.Component {
    render() {
        return (
            <Box>
                <GrommetHeader colorIndex='neutral-1-t' pad='medium'>
                    <SearchBar/>
                    <ProfileButton />
                </GrommetHeader>
            </Box>
        )
    }
}
