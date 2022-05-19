import Image from "next/image";
import Link from "next/link";
import React from "react";

// Icons
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function LeftPortion({ datas }) {
  return (
    <div className="flex justify-between flex-col py-20 space-y-12">
      {/* Title & description */}
      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">
          UI Designer & Frontend Developer From Nepal.
        </h1>
        <p className="text-gray-400">
          Hi, I am{" "}
          <span className="text-gray-100 border-b-2">Ebraj Gurung</span>, I love
          to design as well as develop the sites that are unique in design and
          probably have the greatest UX too. I am currently studying
          Electronics,Communication and Information Engineering from one of the
          reputed Engineering Campus,WRC.
        </p>
        {/* Links */}
        <ul className="space-y-3 text-gray-400">
          {datas.navLinks.map((singleLink) => {
            return (
              <li key={singleLink.index}>
                <Link href="/" passHref>
                  <a>
                    <span className="flex items-center space-x-3 custom-line-container text-sm">
                      <span>{singleLink.index}.</span>
                      <span className="w-12 bg-gray-400 inline-block h-[1px] custom-line"></span>
                      <span className="uppercase">{singleLink.linkTitle}</span>
                    </span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Author Section */}
      <div className="flex justify-start space-x-5 items-center">
        {/* Left Portion */}
        <div className="w-14 rounded-full p-1 bg-green-500">
          <Image
            src="/images/ebraj/ebraj.jpeg"
            className="rounded-full"
            layout="responsive"
            width={1419}
            height={1368}
          />
        </div>

        {/* Right Portion */}
        <div>
          <ul className="flex justify-center items-center space-x-3">
            <li className="flex space-x-1 items-center justify-center">
              <span className="text-green-500 text-xl">
                <AiFillGithub />
              </span>
              <span>GitHub</span>
            </li>
            <li className="flex space-x-1 items-center justify-center">
              <span className="text-green-500 text-xl">
                <AiOutlineTwitter />
              </span>
              <span>Twitter</span>
            </li>
            <li className="flex space-x-1 items-center justify-center">
              <span className="text-green-500 text-xl">
                <AiFillLinkedin />
              </span>
              <span>LinkedIn</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeftPortion;
