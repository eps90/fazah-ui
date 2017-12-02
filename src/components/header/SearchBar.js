import React from 'react';
import Search from "grommet/components/Search";

export default class SearchBar extends React.Component {
    render() {
        return (
            <Search placeHolder="Search" fill={true} inline={true}/>
        );
    }
}
