import React from "react";
import NewProject from "../../components/project/new-project/NewProject";
import {connect} from "react-redux";
import {addNewProject} from "../../store/project/actions";
import PropTypes from "prop-types";
import getLanguagesForDropdown from "../../service/languages/getLanguagesForDropdown";

const NewProjectContainer = ({addNewProject, languages, error, loading}) => {
    return <NewProject addNewProject={addNewProject} languages={languages} error={error} loading={loading} />;
};

NewProjectContainer.propTypes = {
    addNewProject: PropTypes.func.isRequired,
    languages: PropTypes.array.isRequired,
    error: PropTypes.bool,
    loading: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        error: !!state.projects.error,
        loading: !!state.projects.loading,
        languages: getLanguagesForDropdown()
    };
};

export default connect(mapStateToProps, { addNewProject })(NewProjectContainer);