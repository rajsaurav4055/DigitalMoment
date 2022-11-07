import React from "react";
import Lottie from "react-lottie-player";
import Camera from "./assets/camera.json";
import Avatar from "./assets/avatar.json";
import Film from "./assets/film.json";
import Location from "./assets/location.json";
import PP from "./assets/profile_pic.png";
import TextareaAutosize from "react-textarea-autosize";

type Props = {};

const TweetComponent = (props: Props) => {
  const [text, setText] = React.useState("");
  const [longitude, setLongitude] = React.useState(0);
  const [latitude, setLatitude] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const [type, setType] = React.useState("idea");

  //   TODO important: post
  const onSubmit = () => {
    console.log(longitude, latitude, text, type);
    console.log(text);
  };

  return (
    <div className="border-[1px] border-gray-50 rounded-xl p-4 bg-[#FCFCFC]">
      <div className="flex justify-end items-center space-x-4">
        <img src={PP} className="rounded-full h-10 w-10" />
        <TextareaAutosize
          className="min-h-10 w-[420px] rounded-lg border-[1px] p-2"
          onChange={(event: any) => {
            setText(event.target.value);
          }}
        />
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex space-x-2">
          {/* TODO optional: animate on hover */}
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
            onClick={() => {
              setExpanded(!expanded);
            }}
            animationData={Location}
            play
            style={{ width: 30, height: 30 }}
          />
        </div>
        <div></div>
        <div>
          <select
            className="mr-2 bg-transparent"
            onChange={(event) => {
              setType(event?.target.value);
            }}
          >
            <option value="challenge">Challenge</option>
            <option value="idea">Idea</option>
          </select>
          <button
            className="bg-emerald-400 rounded-2xl h-fit py-2 font-bold px-4"
            onClick={() => {
              onSubmit();
            }}
          >
            Share
          </button>
        </div>
      </div>
      {expanded && (
        <div className="flex space-x-2">
          <input
            onChange={(event) => {
              setLongitude(Number(event.target.value));
            }}
            placeholder="Longitude"
            className="rounded-lg border-[1px] px-2 py-1 w-[100px]"
          ></input>
          <input
            onChange={(event) => {
              setLatitude(Number(event.target.value));
            }}
            placeholder="Latitude"
            className="rounded-lg border-[1px] px-2 py-1 w-[100px]"
          ></input>
        </div>
      )}
    </div>
  );
};

export default TweetComponent;
