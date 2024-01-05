import React from "react";
import { shallow } from "enzyme";
import Header from "./Header.jsx";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
