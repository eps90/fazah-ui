import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Breadcrumb as SuiBreadcrumb} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class Breadcrumb extends React.Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    createLink(linkAnchor, contents) {
        return (
            <Link to={linkAnchor}>{contents}</Link>
        );
    }

    createList(items) {
        return items.map(this.createSection, this);
    }

    createSection(item, itemIdx, items) {
        const isLastElement = items.length === itemIdx + 1;
        return (
            <Fragment key={itemIdx}>
                <SuiBreadcrumb.Section active={isLastElement}>
                    {!isLastElement && this.createLink(item.link, item.label)}
                    {isLastElement && item.label}
                </SuiBreadcrumb.Section>
                {!isLastElement && <SuiBreadcrumb.Divider icon="right angle"/>}
            </Fragment>
        );
    }

    render() {
        return (
            <SuiBreadcrumb>
                {this.createList(this.props.items)}
            </SuiBreadcrumb>
        );
    }
}

