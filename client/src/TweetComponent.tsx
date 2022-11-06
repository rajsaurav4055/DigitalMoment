import React from "react";
import Lottie from "react-lottie-player";
import Camera from "./assets/camera.json";
import Avatar from "./assets/avatar.json";
import Film from "./assets/film.json";
import Location from "./assets/location.json";

type Props = {};

const TweetComponent = (props: Props) => {
  const [text, setText] = React.useState("");

  return (
    <div className="border-[1px] border-gray-50 rounded-xl p-4 bg-[#FCFCFC]">
      <div className="flex justify-end items-center space-x-4">
        <div className="rounded-full bg-pink-400 h-6 w-6" />
        <input
          className="h-10 w-[420px] rounded-lg border-[1px] p-2"
          onChange={(event) => {
            setText(event.target.value);
          }}
        ></input>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex space-x-2">
          {/* TODO: animate on hover */}
          <Lottie
            //   loop
            animationData={Camera}
            //   play
            style={{ width: 30, height: 30 }}
          />
          <Lottie
            // loop
            animationData={Film}
            // play
            style={{ width: 30, height: 30 }}
          />
          <Lottie
            // loop
            animationData={Avatar}
            // play
            style={{ width: 30, height: 30 }}
          />
          <Lottie
            loop
            animationData={Location}
            play
            style={{ width: 30, height: 30 }}
          />
        </div>
        <button className="bg-emerald-400 rounded-2xl h-fit py-2 font-bold px-4">
          Share
        </button>
      </div>
    </div>
  );
};

export default TweetComponent;
