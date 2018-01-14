import React from "react";
import FazahLogo from "../../../img/fazah-logo.svg";
import PropTypes from "prop-types";
import "./Logo.scss";

export default class Logo extends React.Component {
    static propTypes = {
        inverted: PropTypes.bool
    };

    static defaultProps = {
        inverted: false
    };

    render() {
        const classNames = ["logo"];
        if (this.props.inverted) {
            classNames.push("inverted");
        }

        return (
            <FazahLogo className={classNames.join(" ")} />
        );
    }
}
