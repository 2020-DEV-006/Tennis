import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("Game", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Game />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("render Game component correctly", () => {
    const GameComponent = renderer.create(<Game />).toJSON();
    expect(GameComponent).toMatchSnapshot();
  });
});
