import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <h3 className='text-[green] text-center text-[40px] font-bold'>Corporate Partners</h3>
    <div className=' flex flex-row flex-wrap mt-10 justify-center gap-10'>
 
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
         
          <img src={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
