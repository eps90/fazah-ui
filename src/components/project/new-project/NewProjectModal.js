import React from "react";
import {Button, Icon, Modal} from "semantic-ui-react";
import NewProjectContainer from "../../../containers/project/NewProjectContainer";

const NewProjectModal = () => (
    <Modal trigger={<Button icon><Icon name="add" /> New project</Button>}>
        <Modal.Header>Create a project</Modal.Header>
        <Modal.Content>
            <NewProjectContainer />
        </Modal.Content>
    </Modal>
);

export default NewProjectModal;