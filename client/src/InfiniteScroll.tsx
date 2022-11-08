import React from "react";
import PP from "./assets/profile_pic.png";
import SubSection from "./SubSection";

type Props = {};

const InfiniteScroll = (props: Props) => {
  return (
    <div className="shadow-md border-[10px] border-gray-50 rounded-xl bg-[#FCFCFC] text-left max-h-[720px] overflow-auto">
      <div>
        <SubSection
          name="John David"
          text="I want to create a tool to track my community's carbon footprint "
          date="2 Days Ago"
          likes={200}
          profilePic = "src\assets\pic33.png"
        />
        <SubSection
          name="Sarah Tyson"
          text="I am interested in creating a code camp for my school"
          date="Yesterday"
          likes={150}
          profilePic = "src\assets\pic2.png"
        />
        <SubSection
          name="Mike Jordan"
          text="I want to find ways to 3D print bike parts"
          date="Yesterday"
          likes={50}
          profilePic = "src\assets\pic3.png"
        />

        <SubSection
          name="Daniel Jefferson"
          text="I want to track my schools digital footprint "
          date="12 Hours Ago"
          likes={10}
          profilePic = "src\assets\pic1.png"
        />

        <SubSection
          name="Lucy Johnson"
          text="Looking for ways to create biodegradable Christmas decorations"
          date="Now"
          likes={5}
          profilePic = "src\assets\pic5.png"
        />

        <SubSection
          name="Andrew Lance "
          text="I want to track power consumption in the province"
          date="Now"
          likes={4}
          profilePic = "src\assets\pic6.png"
        />

      </div>
    </div>
  );
};

export default InfiniteScroll;
