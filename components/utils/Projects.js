import React from "react";
import Link from "next/link";
import Image from "next/image";

// Icons
import { FiExternalLink } from "react-icons/fi";
import { AiFillCode } from "react-icons/ai";
import { FcOpenedFolder } from "react-icons/fc";

function Projects({ datas }) {
  return (
    <>
      <div className="md:py-20 text-gray-500 space-y-2">
        <h2 className="pb-2 font-black text-green-500 flex items-center space-x-2">
          <span className="text-3xl">
            <FcOpenedFolder />
          </span>{" "}
          <span>Projects.</span>
        </h2>
        {datas.projectsList.map((singleData) => {
          return (
            <div
              key={singleData.index}
              className="space-y-5 p-8 rounded-sm bg-[#151515]"
            >
              {/* <Image
                src={singleData.imgSrc}
                width={3472}
                height={1924}
                layout="responsive"
              ></Image> */}
              <h2 className="text-gray-300">{singleData.projectName}</h2>
              <p>{singleData.description}</p>
              <ul className="flex items-center space-x-5">
                <li>
                  <Link href={singleData.liveView} passHref>
                    <a className="flex items-center space-x-1">
                      <span>
                        <AiFillCode />
                      </span>
                      <span>Code</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={singleData.liveView}>
                    <a className="flex items-center space-x-1">
                      <span>
                        <FiExternalLink />
                      </span>
                      <span>Live</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
