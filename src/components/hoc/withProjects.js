// @flow

import React from 'react';
import {fetchProjects} from "../../service/repository/project";
import Spinner from "../Spinner";
import Message from "../main/message/Message";

export default function withProjects(WrappedComponent) {
    return class WrappingComponentXXX extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                error: false,
                loading: true,
                projects: []
            }
        }

        componentDidMount() {
            fetchProjects()
                .then(projects => {
                    this.setState({
                        loading: false,
                        projects: projects
                    });
                })
                .catch(() => {
                    this.setState({
                        error: true,
                        loading: false
                    });
                });
        }

        render() {
            if (this.state.loading) {
                return <Spinner/>;
            } else if (this.state.error) {
                return <Message status='critical' message='Error occurred'/>
            } else {
                return <WrappedComponent projects={this.state.projects} {...this.props} />;
            }
        }
    }
}
