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
      <div className="md:py-20 text-gray-500 space-y-2" id="projects">
        <h2 className="pb-2 font-black text-green-500 flex items-center space-x-2">
          <span className="text-3xl">
            <FcOpenedFolder />
          </span>{" "}
          <span>Projects.</span>
        </h2>
        <div className="space-y-5">
          {datas.projectsList.map((singleData) => {
            return (
              <div
                key={singleData.index}
                className="rounded-md bg-[#151515] hover:scale-110 transition-all duration-200"
              >
                {/* <div>
                  <Image
                    src={singleData.imgSrc}
                    alt={singleData.projectName}
                    width={3472}
                    height={1924}
                    layout="responsive"
                    className="rounded-md"
                  ></Image>
                </div> */}
                <div className="rounded-sm border-b-2 border-green-700 px-8 py-8 space-y-5">
                  <h2 className="text-gray-300">{singleData.projectName}</h2>
                  <p>{singleData.description}</p>
                  <ul className="flex items-center space-x-5">
                    <li className="hover:text-gray-100 transition-all duration-200">
                      <Link href={singleData.sourceCode} passHref>
                        <a
                          target="_blank"
                          className="flex items-center space-x-1"
                        >
                          <span>
                            <AiFillCode />
                          </span>
                          <span>Code</span>
                        </a>
                      </Link>
                    </li>
                    <li className="hover:text-gray-100 transition-all duration-200">
                      <Link href={singleData.liveView}>
                        <a
                          target="_blank"
                          className="flex items-center space-x-1"
                        >
                          <span>
                            <FiExternalLink />
                          </span>
                          <span>Live</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
