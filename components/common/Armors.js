import Image from "next/image";
import React from "react";
import { armorsList } from "../../datas/armorsList";

import { FcApproval } from "react-icons/fc";

function Armors() {
  return (
    <div className="pt-20 space-y-2 md:py-20" id="armors">
      <h2 className="flex items-center pb-2 space-x-2 font-black text-green-500">
        <span className="text-3xl">
          <FcApproval />
        </span>{" "}
        <span>Armors.</span>
      </h2>

      {/* All Skills Show */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {armorsList.map((singleData) => {
          return (
            <div
              key={singleData.index}
              className={
                singleData.index % 2 === 0
                  ? "bg-[#151515] border border-gray-800 rounded-sm grid space-y-4"
                  : "bg-[#151515] border border-gray-800 rounded-sm grid space-y-4"
              }
            >
              <div className="grid h-36 place-content-center">
                <div className="w-[75px] mx-auto">
                  <Image
                    src={singleData.imgSrc}
                    alt={singleData.title}
                    layout="responsive"
                    width={singleData.width}
                    height={singleData.height}
                  />
                </div>
              </div>
              <div className="grid px-8 py-8 space-y-3 bg-black rounded-md">
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
