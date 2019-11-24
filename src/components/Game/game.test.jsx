import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";
import { configure } from "enzyme";
import Player from "../player/player";
import ScoreBoard from "../scoreBoard/scoreBoard";
import { shallow } from "enzyme";
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

  it("handle the win scenario", () => {
    const updateScore = jest.fn();
    const points = [0, 15, 30, 40, "won"];
    const button = shallow(<Player updateScore={updateScore} />);
    var score = shallow(<ScoreBoard />);
    var status = 0;
    points.map((data, id) => {
      if (id > 0) {
        button
          .find(".player")
          .props()
          .onClick();
        status = points[id];
      }
    });
    status = status == "won" ? 1 : 0;
    expect(updateScore).toHaveBeenCalledTimes(4);
    score.setProps({ firstPlayer: status });
    expect(score.props().children[1].props.children[1].props.children).toEqual(
      1
    );
  });

  it("resets the game", () => {
    const firstPlayer = 0;
    const secondPlayer = 0;
    const rendered = renderer.create(
      <ScoreBoard firstPlayer={firstPlayer} secondPlayer={secondPlayer} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
