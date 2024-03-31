import {
  Screen2ClockIcon,
  Screen2HomeIcon,
  Screen2ParaBG,
  Screen2SettingImg1,
  Screen2SettingImg2,
} from "../../Assets";
import "./Screen2.css";
import React, { useEffect } from "react";

export default function Screen2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="screen2_heading">
        Can you figure out the definition of setting from the following
        examples?
      </div>
      <div className="screen2_subheading">
        {"(take a minute to think about this)"}
      </div>
      <div className="screen2_settings_container">
        <div className="screen2_settings_infocard">
          <img
            src={Screen2SettingImg1}
            alt=""
            className="screen2_settings_img"
          />
          <div className="screen2_para">Sunny day at a beach</div>
        </div>
        <div className="screen2_settings_infocard">
          <img
            src={Screen2SettingImg2}
            alt=""
            className="screen2_settings_img"
          />
          <div className="screen2_para screen2_settings_title">
            A cold rainy night in a haunted house in October
          </div>
        </div>
      </div>
      <div className="screen2_para">
        So, what do you think the definition of setting is?
      </div>

      <div className="screen2_hints_row">
        <div className="screen2_hints_row_first_half">
          <div className="screen2_para">Any guesses?</div>
          <div className="screen2_hints_row_input_container">
            <input type="text" className="screen2_hints_row_input" />
          </div>
        </div>
        <div className="screen2_hints_row_second_half">
          <div className="screen2_para">Hint: </div>
          <img src={Screen2ClockIcon} alt="" className="screen2_hints_icons" />
          <img src={Screen2HomeIcon} alt="" className="screen2_hints_icons" />
        </div>
      </div>
      <div className="screen1_bottom_para">
        <img src={Screen2ParaBG} alt="bg_box" className="screen1_para_bg_box" />
        <div className="screen2_subheading screen2_bottom_para_text">
          Setting is the time
          <img src={Screen2ClockIcon} alt="" className="screen2_inline_img" />
          and place
          <img src={Screen2HomeIcon} alt="" className="screen2_inline_img" />
          of a story. It often answers the questions: when? and where?
        </div>
      </div>
      <div className="screen2_para">
        The time of the story could be in the past, future, day, night, summer
        or winter. A story may take place in a school, a mall, a desert, an
        airplane or in a variety of other places.
      </div>
    </>
  );
}
