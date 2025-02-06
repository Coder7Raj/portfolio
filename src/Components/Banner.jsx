import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function Banner() {
  return (
    <div className="flex flex-col-reverse items-center md:flex-row lg:flex-row gap-4 px-3">
      <div className="md:w-[55%] lg:w-[60%] w-full flex flex-col gap-4 md:pt-4 pt-6 lg:pt-0 lg:pr-6">
        <p className="lg:text-5xl md:text-4xl text-3xl font-semibold text-white">
          Hello I'm
        </p>
        <p className="lg:text-5xl md:text-4xl text-3xl font-semibold text-white">
          Owarasur Rahman Raj
        </p>
        <p className="text-xl font-bold text-accent">
          <TypeAnimation
            sequence={[" Frontend Developer", 1000, " ", 500]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "20px",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          aperiam nobis autem expedita, eligendi dignissimos? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Totam aperiam nobis autem
          expedita, eligendi dignissimos? aperiam nobis autem expedita, eligendi
          dignissimos? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Totam aperiam nobis autem expedita, eligendi dignissimos?
        </p>

        <div className="flex items-center gap-2">
          <button className="btn btn-outline btn-accent rounded-r-3xl rounded-l-3xl">
            Download Resume <MdOutlineFileDownload className="text-lg" />
          </button>

          <div className="flex gap-2 items-center">
            <Link className="flex items-center justify-center w-9 h-9 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-black hover:transition-all duration-500">
              <FaLinkedinIn />
            </Link>
            <Link className="flex items-center justify-center w-9 h-9 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-black hover:transition-all duration-500">
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="md:w-[45%] lg:w-[40%] w-[80%] md:px-6 lg:px-20">
        <img
          className="rounded-3xl shadow-[0px_0px_20px_5px_rgba(0,255,0,0.6)]"
          src="https://i.postimg.cc/tTVbQMvH/portfolio.png"
          alt="User Image"
        />
      </div>
    </div>
  );
}
