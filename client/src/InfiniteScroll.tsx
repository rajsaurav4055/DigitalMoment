import React from "react";
import PP from "./assets/profile_pic.png";
import SubSection from "./SubSection";

type Props = {};

const InfiniteScroll = (props: Props) => {
  return (
    <div className="shadow-md border-[10px] border-gray-50 rounded-xl bg-[#FCFCFC] text-left max-h-[720px] overflow-auto">
      <div>
        <SubSection
          name="Chetan Man"
          text="That sounds interesting"
          date="Now"
          likes={200}
        />
        <SubSection
          name="Chetan Man"
          text="That sounds interesting"
          date="Now"
          likes={200}
        />
        <SubSection
          name="Chetan Man"
          text="That sounds interesting"
          date="Now"
          likes={200}
        />
        <SubSection
          name="Chetan Man"
          text="That sounds interesting"
          date="Now"
          likes={200}
        />
        <SubSection
          name="Chetan Man"
          text="That sounds interesting"
          date="Now"
          likes={200}
        />
        <SubSection
          name="Chetan Man"
          text="That sounds interesting"
          date="Now"
          likes={200}
        />
        <SubSection
          name="Chetan Man"
          text="That sounds interesting"
          date="Now"
          likes={200}
        />
      </div>
    </div>
  );
};

export default InfiniteScroll;
