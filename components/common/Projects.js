import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsList } from "../../datas/projectsList";

// Icons
import { FiExternalLink } from "react-icons/fi";
import { AiFillCode } from "react-icons/ai";
import { FcOpenedFolder } from "react-icons/fc";

function Projects() {
  return (
    <>
      <div className="space-y-2 text-gray-500 md:py-20" id="projects">
        <h2 className="flex items-center pb-2 space-x-2 font-black text-green-500">
          <span className="text-3xl">
            <FcOpenedFolder />
          </span>{" "}
          <span>Projects.</span>
        </h2>
        <div className="space-y-5">
          {projectsList.map((singleData) => {
            return (
              <div
                key={singleData.index}
                className="rounded-md bg-[#151515] hover:scale-[102%] transition-all duration-200"
              >
                <div>
                  <Image
                    src={singleData.imgSrc}
                    alt={singleData.projectName}
                    width={singleData.width}
                    height={singleData.height}
                    layout="responsive"
                    className="rounded-md"
                  ></Image>
                </div>
                <div className="px-8 py-8 space-y-5 border-b-2 border-green-700 rounded-sm">
                  <h2 className="text-gray-300">{singleData.projectName}</h2>
                  <p>{singleData.description}</p>
                  <ul className="flex items-center space-x-5">
                    <li className="transition-all duration-200 hover:text-gray-100">
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
                    <li className="transition-all duration-200 hover:text-gray-100">
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
