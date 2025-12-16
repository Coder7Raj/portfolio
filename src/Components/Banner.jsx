import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";

export default function Banner() {
  const openBlank = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex flex-col-reverse items-center md:flex-row lg:flex-row gap-4 px-3">
      <div className="md:w-[55%] lg:w-[60%] w-full flex flex-col gap-4 md:pt-4 pt-6 lg:pt-0 lg:pr-6">
        <p className="lg:text-5xl md:text-4xl text-3xl font-semibold text-white">
          Hello I'm
        </p>
        <p className="lg:text-5xl md:text-4xl text-3xl font-semibold text-white">
          Md. Owarasur Rahman Raj
        </p>
        <p className="text-xl font-bold text-accent">
          <TypeAnimation
            sequence={[
              "Frontend Developer_",
              1500,
              "Junior MERN Stack Developer_",
              1500,
              "Aspiring Software Engineering_",
              1500,
              "Problem Solver_",
              1500,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "20px",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </p>
        <p className="text-[#E5E7EB]">
          Hi, I'm Raj. I'm pursuing a Diploma in Computer Science and passionate about software development. I enjoy building web applications, solving coding challenges, and continuously improving my skills to become a software engineer.Currently, I'm focused on advancing my JavaScript expertise, practicing problem solving, and strengthening my software engineering fundamentals.
        </p>

        <div className="flex items-center gap-2">
          <button className="btn btn-outline btn-accent rounded-r-3xl rounded-l-3xl">
            Download Resume <MdOutlineFileDownload className="text-lg" />
          </button>

          <div className="flex gap-2 items-center">
            <button
              onClick={() =>
                openBlank(
                  "https://www.linkedin.com/in/owarasur-rahman-raj-49159b329/"
                )
              }
              className="flex items-center justify-center w-9 h-9 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-black hover:transition-all duration-500"
            >
              <FaLinkedinIn />
            </button>
            <button
              onClick={() =>
                openBlank("https://www.facebook.com/owarasur.rahman.raj.2024")
              }
              className="flex items-center justify-center w-9 h-9 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-black hover:transition-all duration-500"
            >
              <FaFacebook />
            </button>
          </div>
        </div>
      </div>
      {/*  */}

      <Tilt className="md:w-[45%] lg:w-[40%] w-[80%] md:px-6 lg:px-20">
        <div>
          <img
            className="rounded-3xl shadow-[0px_0px_20px_5px_rgba(186,170,196,0.6)]"
            src="https://i.postimg.cc/tTVbQMvH/portfolio.png"
            alt="User Image"
          />
        </div>
      </Tilt>
    </div>
  );
}
