import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

// Datas
import { datas } from "../datas";

function ImageMarquee() {
  return (
    <>
      <Marquee gradient={false} speed={50}>
        {datas.projectUIsDatas.map((singleData) => {
          return (
            <div key={singleData.src}>
              <Image
                src={singleData.imgSrc}
                width={singleData.width}
                height={singleData.height}
                alt={singleData.alt}
              />
            </div>
          );
        })}
      </Marquee>
    </>
  );
}

export default ImageMarquee;
