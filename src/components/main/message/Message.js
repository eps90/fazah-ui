import React from "react";
import Notification from "grommet/components/Notification";

export default class Message extends React.Component {
    render() {
        return <Notification closer={false} size='medium' {...this.props} />;
    }
}
