import React from "react";
import {Button, Icon, Input} from "semantic-ui-react";
import PropTypes from "prop-types";

export default class CatalogueToolbar extends React.Component {
    static propTypes = {
        addNewCatalogue: PropTypes.func.isRequired,
        projectId: PropTypes.string.isRequired,
        loading: PropTypes.bool,
        parentId: PropTypes.string,
        active: PropTypes.bool
    };

    static defaultTypes = {
        active: false,
        loading: false
    };

    constructor(props) {
        super(props);
        this.state = {
            inputShown: props.active,
            catalogueName: ""
        };
    }

    handleBtnClick() {
        this.setState({
            inputShown: true
        });
    }

    handleChange(event) {
        this.setState({
            catalogueName: event.target.value
        });
    }

    handleKeyDown(event) {
        if (event.key === "Enter") {
            this.props.addNewCatalogue({
                projectId: this.props.projectId,
                parentId: this.props.parentId,
                name: this.state.catalogueName
            });
            this.reset();
        } else if (event.key === "Escape") {
            this.reset();
        }
    }

    reset() {
        this.setState({
            catalogueName: "",
            inputShown: false
        });
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.inputShown &&
                    <Button onClick={this.handleBtnClick.bind(this)}>
                        <Icon name="add circle" />
                        Add catalogue
                    </Button>
                }
                {this.state.inputShown &&
                    <Input loading={this.props.loading} placeholder="Catalogue name"
                        onChange={this.handleChange.bind(this)}
                        onKeyDown={this.handleKeyDown.bind(this)} />
                }
            </React.Fragment>
        );
    }
}