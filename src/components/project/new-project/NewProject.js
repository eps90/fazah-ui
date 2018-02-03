import React from "react";
import {Button, Dropdown, Flag, Form, Label, Message} from "semantic-ui-react";
import PropTypes from "prop-types";

export default class NewProject extends React.Component {
    static propTypes = {
        loading: PropTypes.bool,
        addNewProject: PropTypes.func.isRequired,
        languages: PropTypes.array.isRequired,
        error: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            availableLangs: []
        };
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleLanguagesChange(e, data) {
        this.setState({
            availableLangs: data.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addNewProject(this.state);
    }

    renderLangLabel(label) {
        return <Label>
            <Flag name={label.flag} />
            {label.text}
        </Label>;
    }

    isFormValid() {
        return this.state.name.length > 0;
    }

    render() {
        return (
            <Form error={this.props.error} loading={this.props.loading} onSubmit={this.handleSubmit.bind(this)}>
                {this.props.error &&
                    <Message
                        error
                        header="Cannot create project"
                        content="Please try again later"
                    />
                }
                <Form.Field required={true}>
                    <label>Name</label>
                    <input type="text" id="projectName" name="project_name" value={this.state.name}
                        onChange={this.handleNameChange.bind(this)} />
                </Form.Field>
                <Form.Field>
                    <label>Available languages</label>
                    <Dropdown multiple search selection options={this.props.languages}
                        renderLabel={this.renderLangLabel.bind(this)}
                        onChange={this.handleLanguagesChange.bind(this)} />
                </Form.Field>
                <Button type="submit" id="submit" disabled={!this.isFormValid()}>Submit</Button>
            </Form>
        );
    }
}