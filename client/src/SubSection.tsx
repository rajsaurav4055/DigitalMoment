import React from "react";
import Lottie from "react-lottie-player";
import Camera from "./assets/camera.json";
import Avatar from "./assets/avatar.json";
import Film from "./assets/film.json";
import Heart from "./assets/heart.json";
import Location from "./assets/location.json";
import PP from "./assets/profile_pic.png";
import Arrow from "./assets/arrow.json";
import Star from "./assets/star.json";
import TextareaAutosize from "react-textarea-autosize";

type Props = {
  name?: string;
  text?: string;
  date?: string;
  likes?: number;
  shares?: number;
  profilePic?: string;
};

const SubSection = (props: Props) => {
  const { name, text, date, likes, shares, profilePic } = props;

  return (
    <div className="border-[1px] border-gray-50 rounded-xl p-4 bg-[#FCFCFC]">
      <div className="flex justify-start items-center space-x-2">
        <img src={profilePic ?? PP} className="rounded-full h-10 w-10" />
        <div className="flex-column text-left">
          <h4>{name}</h4>
          <h5>{date}</h5>
        </div>
      </div>
      <div className="flex py-2">{text}</div>
      <div className="flex justify-between">
        <div className="flex space-x-8 items-center">
          {likes}
          <Lottie
            //   loop
            animationData={Heart}
            //   play
            style={{ width: 30, height: 30 }}
          />
          {shares}
          <Lottie
            // loop
            animationData={Arrow}
            // play
            style={{ width: 30, height: 30 }}
          />
          <Lottie
            // loop
            animationData={Star}
            // play
            style={{ width: 30, height: 30 }}
          />
        </div>
      </div>
    </div>
  );
};

export default SubSection;
