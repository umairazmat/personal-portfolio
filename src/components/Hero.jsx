import React from "react";
import styles from "../style";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe, repoLink, resumeLink, socialMedia } from "../constants";
import { AiOutlineFilePdf } from "react-icons/ai";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import { profilePic } from "../assets";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          {/* Hero text */}
          <div className="flex flex-row justify-between items-center w-full text-white">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[80px]">
              Hi there!
              <br className="sm:block hidden" /> I am
            </h1>

            <div className="ss:flex hidden md:mr-4 mr-0">
              <LetsConnect />
            </div>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full">
            <span className="text-gradient">{aboutMe.name}</span>
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            {aboutMe.intro}
          </p>
          {/* Social Icons */}
          <div className="flex flex-row mt-4">
            {socialMedia.map((social, index) => (
              <a
                href={social.link}
                target="_blank"
                key={social.id}
                index={index}
                className="text-white mr-5 text-[25px] hover:text-teal-200"
              >
                {React.createElement(social.icon)}
              </a>
            ))}
          </div>
          {/* CV button */}
          <div className="grid grid-cols-2">
            {/* styles is a prop */}
            <a href={resumeLink} target="_blank">
              <Button
                styles="mt-10 mr-3 inline-flex items-center justify-center"
                text="Resume"
                icon={AiOutlineFilePdf}
              />
            </a>
            <a href={repoLink} target="_blank">
              <Button
                styles="mt-10 inline-flex items-center justify-center"
                text="Star"
                icon={FaGithub}
              />
            </a>
            {/* Contact Me */}
            {/* <a href={repoLink} target="_blank">
            <Button
              styles="mt-10 inline-flex items-center justify-center"
              text="Star"
              icon={FaGithub}
            />
          </a> */}
          </div>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <div className="relative z-index-[5] h-[90%] w-[85%]">
            <Lottie {...defaultOptions} />
          </div>
          <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"></div>
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <LetsConnect />
        </div>
      </section>
      {/* About Me Section */}
      <section
        id="about"
        className={`flex flex-col md:flex-row ${styles.paddingY}`}
      >
        <div className="flex-1 flex flex-col justify-start px-4 sm:px-8 lg:px-10">
          <h1 className="font-poppins font-semibold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight sm:leading-[60px] lg:leading-[70px] text-center sm:text-left">
            About Me
          </h1>
          <p
            className={`${styles.paragraph} mt-5 text-base sm:text-lg lg:text-xl max-w-full md:max-w-[90%] lg:max-w-[75%] text-center sm:text-left`}
          >
            My name is Umair Azmat. I am a software engineer with a passion for
            problem-solving, creating efficient solutions, and exploring new
            technologies. With experience in JavaScript, React, and backend
            development, I enjoy building scalable, user-focused applications.
          </p>
        </div>

        <div className="flex-1 flex justify-around relative mt-8 md:mt-0">
          <div className=" overflow-hidden border-4 border-teal-500 w-52 h-52 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
            <img
              src={profilePic}
              alt="Umair Azmat"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center items-center text-center mb-20">
          {[
            { value: "3+", label: "Years of Experience" },
            { value: "8+", label: "Technologies Mastered" },
            { value: "20+", label: "Projects Completed" },
            { value: "1k+", label: "Code Commits" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center animate__animated animate__fadeIn animate__delay-1s"
            >
              <p className="font-poppins font-bold text-xl sm:text-2xl lg:text-3xl text-white">
                <span className="counter">{stat.value}</span>
              </p>
              <p className="text-teal-200 text-sm sm:text-base lg:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
