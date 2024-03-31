import {
  Screen1ChildGraphic,
  Screen1Cloud1,
  Screen1Cloud2,
  Screen1Cloud3,
  Screen1Cloud4,
  Screen1Cloud5,
  Screen1Commuincations,
  Screen1ForwBtn,
  Screen1HeadingBGBox,
  Screen1InfoBtn,
  Screen1ParagraphBGBox,
  Screen1PrevBtn,
  Screen1ThirdParaBGBox,
  Screen1Week1,
} from "../../Assets";
import "./Screen1.css";
import React, { useState } from "react";

export default function Screen1() {
  const options = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
  ];
  let [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleSelect = (event) => {
    setSelectedOption((selectedOption = event.target.value));
  };

  return (
    <>
      <div className="screen1_box">
        <img src={Screen1Week1} alt="week1" className="screen1_week1_img" />

        <div className="screen1_main_box">
          <div className="screen1_header_container">
            <img
              src={Screen1HeadingBGBox}
              alt="bg"
              className="screen1_heading_bg_img"
            />
            <div className="screen1_heading">Elements of Story Writing</div>
          </div>
          <div className="screen1_paragraph">
            Welcome to term 2 of Writers Club. Are you excited for this amazing
            journey? Over the next week, we will be practicing the different
            elements of story writing. Our aim is to make stories more
            interesting and exciting.
          </div>

          <div className="screen1_third_para">
            <img
              src={Screen1ThirdParaBGBox}
              alt=""
              className="screen1_third_para_bg_img"
            />
            <div className="screen1_paragraph screen1_third_para_text">
              There are <b>five</b> elements which make the foundation for story
              writing. An element is an essential part of something and every
              fiction story has the same key elements:
            </div>
            <img
              src={Screen1ChildGraphic}
              alt=""
              className="screen1_child_graphic_img"
            />
          </div>

          <div className="screen1_clouds_container">
            <div className="screen1_cloud">
              <img
                src={Screen1Cloud1}
                alt="Cloud"
                className="screen1_cloud_img"
              />
              <div className="screen1_cloud_content">SETTING</div>
            </div>
            <div className="screen1_cloud">
              <img
                src={Screen1Cloud2}
                alt="Cloud"
                className="screen1_cloud_img"
              />
              <div className="screen1_cloud_content">CHARACTERS</div>
            </div>
            <div className="screen1_cloud">
              <img
                src={Screen1Cloud3}
                alt="Cloud"
                className="screen1_cloud_img"
              />
              <div className="screen1_cloud_content">PLOT</div>
            </div>
            <div className="screen1_cloud">
              <img
                src={Screen1Cloud4}
                alt="Cloud"
                className="screen1_cloud_img"
              />
              <div className="screen1_cloud_content">PROBLEM OR CONFLICT</div>
            </div>
            <div className="screen1_cloud">
              <img
                src={Screen1Cloud5}
                alt="Cloud"
                className="screen1_cloud_img"
              />
              <div className="screen1_cloud_content">RESOLUTION</div>
            </div>
          </div>
          <div className="screen1_paragraph">
            You must be familiar with some of these. If not, do not worry! we
            will cover all these elements as we go along.
          </div>
          <div className="screen1_bottom_para">
            <img
              src={Screen1ParagraphBGBox}
              alt="bg_box"
              className="screen1_para_bg_box"
            />
            <div className="screen1_paragraph screen1_bottom_para_text">
              For today's lesson, we will try to understand and practice writing
              the setting for our stories.
              <br />
              The setting is an important element of every fiction story.
            </div>
          </div>
        </div>

        <div className="screen1_footer">
          <img
            src={Screen1Commuincations}
            alt=""
            className="screen1_communications_img"
          />
          <div className="screen1_nav_container">
            <img src={Screen1PrevBtn} alt="" className="screen1_nav_btn" />
            <div className="dropdown">
              <select
                value={selectedOption}
                onChange={(e) => {
                  handleSelect(e);
                }}
              >
                {options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <img src={Screen1ForwBtn} alt="" className="screen1_nav_btn" />
          </div>
          <img
            src={Screen1InfoBtn}
            alt=""
            className="screen1_communications_img"
          />
        </div>
      </div>
    </>
  );
}
