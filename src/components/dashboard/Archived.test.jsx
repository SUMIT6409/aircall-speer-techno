import React from "react";
import { shallow } from "enzyme";
import Archived from "./Archived.jsx";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Archived />);
    expect(component).toMatchSnapshot();
  });
});
