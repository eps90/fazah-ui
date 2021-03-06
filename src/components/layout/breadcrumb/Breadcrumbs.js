import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Breadcrumb as SuiBreadcrumb} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Breadcrumbs extends React.Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        store: PropTypes.object
    };

    createLink(linkAnchor, contents) {
        let contentsParsed = contents;
        let linkParsed = linkAnchor;
        if (typeof contents === "function") {
            contentsParsed = this.createContentFromFunction(contents);
        }
        if (typeof linkAnchor === "function") {
            linkParsed = this.createContentFromFunction(linkAnchor);
        }
        return (
            <Link to={linkParsed}>{contentsParsed}</Link>
        );
    }

    createLabel(contents) {
        let contentsParsed = contents;
        if (typeof contents === "function") {
            contentsParsed = this.createContentFromFunction(contents);
        }
        return contentsParsed;
    }

    createContentFromFunction(content) {
        const {store} = this.props;
        return content({store});
    }

    createList(items) {
        return items.map(this.createSection, this);
    }

    createSectionContents({link, label}) {
        return link !== undefined
            ? this.createLink(link, label)
            : this.createLabel(label);
    }

    createSection(item, itemIdx, items) {
        const isLastElement = items.length === itemIdx + 1;
        return (
            <Fragment key={itemIdx}>
                <SuiBreadcrumb.Section active={isLastElement}>
                    {this.createSectionContents(item)}
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

export default connect(
    store => {
        return {store};
    }
)(Breadcrumbs);
