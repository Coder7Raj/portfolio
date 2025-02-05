import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function Banner() {
  return (
    <div className="flex flex-col-reverse items-center md:flex-row lg:flex-row gap-4 px-3">
      <div className="md:w-[55%] lg:w-[50%] w-full flex flex-col gap-4">
        <p className="text-xl font-bold text-white">
          Hello I am a
          <span className="ml-1 text-[#5B913B]">
            <TypeAnimation
              sequence={[" Frontend Developer", 1000, " ", 500]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "30px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </span>
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          aperiam nobis autem expedita, eligendi dignissimos? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Totam aperiam nobis autem
          expedita, eligendi dignissimos? aperiam nobis autem expedita, eligendi
          dignissimos? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Totam aperiam nobis autem expedita, eligendi dignissimos?
        </p>
        {/* social icons */}
        <div className="flex gap-1">
          <div>
            <Link>
              <img
                className="w-8"
                src="https://i.postimg.cc/13LVzGBP/linkedin.png"
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link>
              {" "}
              <img
                className="w-8"
                src="https://i.postimg.cc/DfMvF2B3/facebook-3488302.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-outline btn-success"> view resume</button>
          <button className="btn btn-outline btn-success">
            download resume
          </button>
          <button></button>
        </div>
      </div>
      {/*  */}

      <div className="md:w-[45%] lg:w-[50%] w-full md:px-6 lg:px-20">
        <img
          className="rounded-3xl shadow-[0px_0px_20px_5px_rgba(0,255,0,0.6)]"
          src="https://i.postimg.cc/tTVbQMvH/portfolio.png"
          alt="User Image"
        />
      </div>
    </div>
  );
}
