import React from "react";
import { shallow } from "enzyme";
import Activity from "./Activity.jsx";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Activity />);
    expect(component).toMatchSnapshot();
  });
});
