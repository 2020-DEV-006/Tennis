import React from "react";
import ReactDOM from "react-dom";
import ScoreBoard from "./ScoreBoard";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
configure({ adapter: new Adapter() });

describe("ScoreBoard", () => {
  it("render correctly ScoreBoard component correctly", () => {
    const Scoreboard = renderer.create(<ScoreBoard />).toJSON();
    expect(Scoreboard).toMatchSnapshot();
  });

  it("renders first player correctly", () => {
    const firstPlayer = 0;
    const rendered = renderer.create(<ScoreBoard firstPlayer={firstPlayer} />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it("renders second player correctly", () => {
    const secondPlayer = 0;
    const rendered = renderer.create(
      <ScoreBoard secondPlayer={secondPlayer} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  
});
