import React from "react";
import Player from "./player";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
configure({ adapter: new Adapter() });

describe("Player", () => {
  it("render correctly Player component correctly", () => {
    const player = renderer.create(<Player />).toJSON();
    expect(player).toMatchSnapshot();
  });
});
