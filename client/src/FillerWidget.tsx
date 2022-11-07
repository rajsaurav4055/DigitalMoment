import React from "react";
import PP from "./assets/profile_pic.png";

type Props = {};

const FillerWidget = (props: Props) => {
  return (
    <div className="md:w-[300px]">
      <div className="mb-4 shadow-md border-[1px] border-gray-50 rounded-xl p-4 bg-[#FCFCFC] text-left">
        <p className="text-3xl font-semibold">Trending</p>
        <div>
          <p className="px-2 py-1 text-emerald-600 hover:underline">
            #DigitalMoment
          </p>
          <p className="px-2 py-1 text-emerald-600 hover:underline">
            #CodeToGive
          </p>
          <p className="px-2 py-1 text-emerald-600 hover:underline">
            #MorganStanley
          </p>
          <p className="px-2 py-1 text-emerald-600 hover:underline">... more</p>
        </div>
      </div>
      <div className="shadow-md border-[1px] border-gray-50 rounded-xl p-4 bg-[#FCFCFC] text-left">
        <p className="text-3xl font-semibold">Suggested</p>
        <div className="py-2 flex justify-between">
          <div className="flex">
            <img src={PP} className="rounded-full h-10 w-10 mr-2" />
            <div className="flex flex-col">
              <p>Khai Tran</p>
              <p className="text-gray-400">@khai_tran</p>
            </div>
          </div>
          <button className="my-auto font-[500] border-2 border-emerald-500 rounded-full px-4 py-1 h-fit">
            Connect
          </button>
        </div>
        <div className="py-2 flex justify-between">
          <div className="flex">
            <img src={PP} className="rounded-full h-10 w-10 mr-2" />
            <div className="flex flex-col">
              <p>Khai Tran</p>
              <p className="text-gray-400">@khai_tran</p>
            </div>
          </div>
          <button className="my-auto font-[500] border-2 border-emerald-500 rounded-full px-4 py-1 h-fit">
            Connect
          </button>
        </div>
        <div className="py-2 flex justify-between">
          <div className="flex">
            <img src={PP} className="rounded-full h-10 w-10 mr-2" />
            <div className="flex flex-col">
              <p>Khai Tran</p>
              <p className="text-gray-400">@khai_tran</p>
            </div>
          </div>
          <button className="my-auto font-[500] border-2 border-emerald-500 rounded-full px-4 py-1 h-fit">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default FillerWidget;
