import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillPhone,
  AiFillMail,
  AiFillHome,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlinePhone,
} from "react-icons/ai"; // Importing specific icons
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../style";
import Button from "./Button";
import { profilePic } from "../assets";
import { layout } from "../style";
import {
  resumeLink,
  repoLink,
  socialMedia,
  aboutMe,
  profileLink,
} from "../constants";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Form submit handler to send email via EmailJS
  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const form = event.target;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID, // Your EmailJS Service ID
        import.meta.env.VITE_EMAIL_TEMPLATE_ID, // Your EmailJS Template ID
        form, // Pass the HTML form element here
        import.meta.env.VITE_EMAIL_USER_ID // Your EmailJS User ID
      );
      setIsLoading(false);
      toast.success("Email sent successfully!");
      toast.success("I'll get back to you soon.");
      form.reset(); // Clear the form after sending
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to send message");
      toast.error("Please try again.");
    }
  }

  return (
    <>
      {/* ToastContainer for displaying toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <section
            id="contactMe"
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
          >
            <div className="flex-1 flex flex-col px-4 sm:px-8 lg:px-10">
              <div className="space-y-4">
                <h1 className="font-poppins font-semibold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight text-center sm:text-left">
                  LET&apos;S CONNECT!
                </h1>
                <p
                  className={`${styles.paragraph} mt-5 text-base sm:text-lg lg:text-xl max-w-full md:max-w-[90%] lg:max-w-[75%] text-center sm:text-left`}
                >
                  Reach out to discuss opportunities, projects, or just to start
                  a conversation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                {/* Contact Information */}
                <div className="p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
                  <p
                    className={`${styles.paragraph} mt-5 mb-5 text-base sm:text-sm lg:text-xl max-w-full sm:text-left`}
                  >
                    If you have any questions or concerns, please don't hesitate
                    to contact me. I am open to any work opportunities that
                    align with my skills and interests.
                  </p>
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <AiOutlinePhone className="w-6 h-6 text-teal-400" />
                      <div className="text-gray-400">
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p className="text-sm">+92 3217061116</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <AiOutlineMail className="w-6 h-6 text-teal-400 flex-shrink-0" />
                      <div className="text-gray-400">
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-sm break-words">
                          umairazmatdev@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <AiOutlineHome className="w-6 h-6 text-teal-400" />
                      <div className="text-gray-400">
                        <h3 className="text-lg font-semibold">Location</h3>
                        <p className="text-sm">Lahore, Pakistan</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex flex-wrap justify-start mt-8">
                    {socialMedia.map((social, index) => (
                      <a
                        href={social.link}
                        target="_blank"
                        key={social.id}
                        className="text-white mr-5 mb-4 text-[25px] hover:text-teal-200"
                      >
                        {React.createElement(social.icon)}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contact Form */}
                <div className="p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-gray-400" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-gray-400" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-gray-400" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className={`w-full py-2 bg-teal-400 text-white rounded-md font-semibold ${
                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>

              {/* Say Hello Button */}
              <div className="flex justify-center mt-8">
                <a
                  href="mailto:umairazmatdev@gmail.com"
                  className="px-6 py-3 bg-teal-400 text-white rounded-md text-lg font-semibold hover:bg-teal-500"
                >
                  Say Hello!
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className="bg-gray-900 sm:px-16 px-6">
        <div
          className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4 `}
        >
          <div className={` ${layout.sectionInfo}`}>
            <h2 className="text-xl font-bold text-teal-200 font-poppins dark:text-white hover:text-teal-200 dark:hover:text-gray-300">
              {aboutMe.name}
            </h2>
            <p
              className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
            >
              {aboutMe.tagLine}
            </p>
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

            <div className="grid grid-cols-2">
              {/* styles is a prop */}
              <a href={resumeLink} target="_blank">
                <Button
                  styles="mt-10 mr-3 inline-flex items-center justify-center"
                  text="Resume"
                  icon={AiFillGithub}
                />
              </a>
              <a href={repoLink} target="_blank">
                <Button
                  styles="mt-10 inline-flex items-center justify-center"
                  text="Star"
                  icon={AiFillGithub}
                />
              </a>
            </div>
          </div>

          <div className="md:ml-auto mt-10 md:mt-0">
            <img
              src={profilePic}
              alt="Umair Azmat"
              className="w-[250px] h-[250px] border-2 border-teal-200 relative z-[5] rounded-full"
            />
          </div>
        </div>
        <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4">
          <p>
            Made with 💙 by{" "}
            <a
              href={profileLink}
              className="font-bold text-teal-200 font-poppins dark:text-white hover:text-teal-200 dark:hover:text-gray-300"
            >
              Umair Azmat
            </a>{" "}
            & the Open Source Community
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
