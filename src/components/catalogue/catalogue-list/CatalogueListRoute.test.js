import React from "react";
import {shallow} from "enzyme";
import CatalogueListContainer from "../../../containers/catalogue/CatalogueListContainer";
import CatalogueListRoute from "./CatalogueListRoute";

describe("CatalogueListRoute", () => {
    it("should render a CatalogueListContainer with projectId from route", () => {
        expect.assertions(2);

        const projectId = "12331";
        const match = {
            params: {
                projectId
            }
        };

        const component = <CatalogueListRoute match={match} />;
        const wrapper = shallow(component);

        expect(wrapper.find(CatalogueListContainer)).toHaveLength(1);
        expect(wrapper.find(CatalogueListContainer).first().props().projectId).toEqual(projectId);
    });
});
