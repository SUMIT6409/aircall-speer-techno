import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer.jsx";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
