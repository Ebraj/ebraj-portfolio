import Image from "next/image";
import { Link as LinkFromNPM } from "react-scroll";
import Link from "next/link";
import React from "react";
import { navLinks } from "../../datas/navLinks";

// Icons
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function LeftPortion() {
  return (
    <div className="sticky top-0 flex flex-col justify-between py-20 space-y-12 md:min-h-screen">
      {/* Title & description */}
      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        <h1 className="text-3xl font-black sm:text-4xl md:text-5xl">
          UI Designer & Frontend Developer From Nepal.
        </h1>
        <p className="text-gray-400">
          Hi, I am{" "}
          <span className="text-gray-100 border-b-2">Ebraj Gurung</span>, I love
          to design as well as develop the sites that are unique in design and
          probably have the greatest UX too. I am currently studying
          Electronics,Communication and Information Engineering from one of the
          Engineering Campus,WRC.
        </p>
        {/* Links */}
        <ul className="space-y-6 text-gray-400">
          {navLinks.map((singleLink) => {
            return (
              <li
                key={singleLink.index}
                className="cursor-pointer w-[min-content]"
              >
                <LinkFromNPM
                  to={singleLink.linkTo}
                  activeClass="custom-active-class"
                  smooth={true}
                  spy={true}
                >
                  <span className="flex items-center space-x-3 text-sm custom-line-container">
                    <span>{`0${singleLink.index}`}</span>
                    <span className="w-6 bg-gray-500 inline-block h-[1px] custom-line"></span>
                    <span className="font-bold uppercase">
                      {singleLink.linkTitle}
                    </span>
                  </span>
                </LinkFromNPM>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Author Section */}
      <div className="flex items-center justify-between space-x-5 sm:justify-start">
        {/* Left Portion */}
        <div className="p-1 bg-green-500 rounded-full w-14">
          <Image
            src="/images/ebraj/ebraj.jpeg"
            alt="Ebraj Gurung."
            className="rounded-full"
            layout="responsive"
            width={1419}
            height={1368}
          />
        </div>

        {/* Right Portion */}
        <div>
          <ul className="flex items-center justify-center space-x-3 text-gray-400">
            <li className="custom-social-link">
              <Link href="https://github.com/ebraj" passHref>
                <a
                  target="_blank"
                  className="flex items-center justify-center space-x-1"
                >
                  <span className="text-xl text-green-500 custom-social-icon">
                    <AiFillGithub />
                  </span>
                  <span className="hidden sm:inline-block custom-social-text">
                    GitHub
                  </span>
                </a>
              </Link>
            </li>
            <li className="custom-social-link">
              <Link href="https://twitter.com/ebraj_g" passHref>
                <a
                  target="_blank"
                  className="flex items-center justify-center space-x-1"
                >
                  <span className="text-xl text-green-500 custom-social-icon">
                    <AiOutlineTwitter />
                  </span>
                  <span className="hidden sm:inline-block custom-social-text">
                    Twitter
                  </span>
                </a>
              </Link>
            </li>
            <li className="custom-social-link">
              <Link href="https://www.linkedin.com/in/ebrajgrg/" passHref>
                <a
                  target="_blank"
                  className="flex items-center justify-center space-x-1"
                >
                  <span className="text-xl text-green-500 custom-social-icon">
                    <AiFillLinkedin />
                  </span>
                  <span className="hidden sm:inline-block custom-social-text">
                    LinkedIn
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeftPortion;
