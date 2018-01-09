import React from "react";
import Main from "./layout/main/Main";
import Header from "./layout/header/Header";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main/>
            </div>
        );
    }
}
