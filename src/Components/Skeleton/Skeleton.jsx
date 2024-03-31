import { BGLeft, BGRight } from "../../Assets";
import "./Skeleton.css";

import React from "react";

export default function Skeleton() {
  return (
    <>
      <img
        src={BGLeft}
        alt="BG"
        className="skeleton_bg_left_img skeleton_bg_img"
      />
      <img
        src={BGRight}
        alt="BG"
        className="skeleton_bg_right_img skeleton_bg_img"
      />
    </>
  );
}
