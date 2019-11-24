import React from "react";
import Player from "./player";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
configure({ adapter: new Adapter() });

describe("Player", () => {
  it("render correctly Player component correctly", () => {
    const player = renderer.create(<Player />).toJSON();
    expect(player).toMatchSnapshot();
  });
  
  it('handle players ball call "updateScore" prop on button click', () => {
    const updateScore = jest.fn();
    const button = shallow((<Player updateScore={updateScore} />));
    button.find('.player').props().onClick();
    expect(updateScore).toHaveBeenCalled();
    expect(updateScore).toHaveBeenCalledTimes(1);
  });
  
});
