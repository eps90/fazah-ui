import React from 'react';
import Logo from './header/Logo';
import SearchBar from './header/SearchBar';
import ProfileButton from './header/ProfileButton';
import ProjectsListContainer from './main/ProjectsListContainer'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <section className="header">
                    <Logo />
                    <SearchBar />
                    <ProfileButton />
                </section>
                <section className="main">
                    <ProjectsListContainer />
                </section>
            </div>
        );
    }
}
