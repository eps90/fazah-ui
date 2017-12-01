import React from 'react';
import SearchBar from "./SearchBar";
import ProfileButton from "./ProfileButton";
import Box from "grommet/components/Box";
import GrommetHeader from 'grommet/components/Header';

export default class Header extends React.Component {
    render() {
        return (
            <Box pad='small'>
                <GrommetHeader>
                    <SearchBar/>
                    <ProfileButton />
                </GrommetHeader>
            </Box>
        )
    }
}
