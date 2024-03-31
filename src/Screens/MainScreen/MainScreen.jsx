import {
  Screen1Commuincations,
  Screen1ForwBtn,
  Screen1InfoBtn,
  Screen1PrevBtn,
  Screen1Week1,
  Screen2HintsBtn,
} from "../../Assets";
import Screen1 from "../../Components/Screen1/Screen1";
import Screen2 from "../../Components/Screen2/Screen2";
import "./MainScreen.css";
import React, { useState } from "react";
import Fade from "react-reveal";

export default function MainScreen() {
  const options = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
  ];
  let [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleSelect = (event) => {
    setSelectedOption((selectedOption = parseInt(event.target.value)));
    console.log("selectedOption", selectedOption);
  };

  return (
    <>
      <div className="screen1_box">
        {selectedOption === 1 ? (
          <>
            <Fade top>
              <img
                src={Screen1Week1}
                alt="week1"
                className="screen1_week1_img"
              />
            </Fade>
          </>
        ) : selectedOption === 2 ? (
          <>
            <Fade right>
              <img src={Screen2HintsBtn} alt="" className="hints_btn" />
            </Fade>
          </>
        ) : (
          ""
        )}

        <Fade left>
          <div className="screen1_main_box">
            {selectedOption === 1 ? (
              <Screen1 />
            ) : selectedOption === 2 ? (
              <Screen2 />
            ) : (
              ""
            )}
          </div>
        </Fade>

        <Fade bottom>
          <div className="screen1_footer">
            <img
              src={Screen1Commuincations}
              alt=""
              className="screen1_communications_img"
            />
            <div className="screen1_nav_container">
              <img
                src={Screen1PrevBtn}
                alt=""
                className="screen1_nav_btn"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedOption((selectedOption = selectedOption - 1));
                }}
              />
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
              <img
                src={Screen1ForwBtn}
                alt=""
                className="screen1_nav_btn"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedOption((selectedOption = selectedOption + 1));
                }}
              />
            </div>
            <img
              src={Screen1InfoBtn}
              alt=""
              className="screen1_communications_img"
            />
          </div>
        </Fade>
      </div>
    </>
  );
}
