import Image from "next/image";
import React from "react";

import { FcApproval } from "react-icons/fc";

function Armors({ datas }) {
  return (
    <div className="pt-20 md:py-20 space-y-2" id="armors">
      <h2 className="pb-2 font-black text-green-500 flex items-center space-x-2">
        <span className="text-3xl">
          <FcApproval />
        </span>{" "}
        <span>Armors.</span>
      </h2>

      {/* All Skills Show */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {datas.armorsList.map((singleData) => {
          return (
            <div
              key={singleData.index}
              className={
                singleData.index % 2 === 0
                  ? "bg-[#151515] border border-gray-800 rounded-sm grid space-y-4"
                  : "bg-[#151515] border border-gray-800 rounded-sm grid space-y-4"
              }
            >
              <div className="h-36 grid place-content-center">
                <div className="w-[75px] mx-auto">
                  <Image
                    src={singleData.imgSrc}
                    alt={singleData.title}
                    layout="responsive"
                    width={2000}
                    height={2000}
                  />
                </div>
              </div>
              <div className="bg-black px-8 py-8 grid rounded-md space-y-3">
                <h2 className="text-gray-300">{singleData.title}</h2>
                <p className="text-gray-500">{singleData.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Armors;
