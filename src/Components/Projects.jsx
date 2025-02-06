import React from "react";

export default function Projects() {
  const handleOpenBlank = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <p className="text-center text-accent text-3xl font-bold">My Projects</p>
      <p className="text-white text-center mt-2">
        Welcome to my project showcase! Here, you'll find a collection of web
        applications and creative solutions <br /> I've built using technologies
        like React, Tailwind CSS, and JavaScript. Each project <br /> reflects
        my journey in web development, focusing on clean design, functionality,
        and user experience.
      </p>
      {/* 1 */}
      <div className="mt-16">
        <div className="w-full lg:h-[480px] md:h-[460px] h-[270px] flex justify-around gap-2 px-2">
          <img
            className="lg:w-[49%] md:w-[49%] w-[45%] lg:h-[460px] md:h-[435px] h-64"
            src="https://i.postimg.cc/rsrjgCpy/scr1.png"
            alt="project image"
            onClick={() =>
              handleOpenBlank("https://i.postimg.cc/rsrjgCpy/scr1.png")
            }
          />
          <img
            className="lg:w-[49%] md:w-[49%] w-[45%] lg:h-[460px] md:h-[435px] h-64"
            src="https://i.postimg.cc/mDtWLqmd/src2.png"
            alt="project image"
            onClick={() =>
              handleOpenBlank("https://i.postimg.cc/mDtWLqmd/src2.png")
            }
          />
        </div>
        <div>
          <p className="text-white text-2xl">
            MOTORVISTA - A Car Rental Application
          </p>
          <p className="text-[#E5E7EB] mt-2 lg:w-[50%] md:w-[70%] w-full">
            MotorVista is an innovative car rental platform designed to offer
            users an easy and seamless way to rent vehicles for both short and
            long-term use. Whether you need a compact car for a quick city trip
            or a luxury vehicle for a special occasion.
          </p>
          <div className="grid grid-cols-4 gap-1 lg:w-[50%] md:w-[60%] w-full mt-2">
            <p className="px-2 py-1 rounded-lg bg-gray-300 text-center border-none outline-none">
              ReactJS
            </p>
            <p className="px-2 py-1 rounded-lg bg-gray-300 text-center border-none outline-none">
              MongoDB
            </p>
            <p className="px-2 py-1 rounded-lg bg-gray-300 text-center border-none outline-none">
              ExpressJS
            </p>
            <p className="px-2 py-1 rounded-lg bg-gray-300 text-center border-none outline-none">
              TailwindCSS
            </p>
          </div>
          <div className="lg:w-[35%] md:w-[35%] flex flex-col md:flex-row lg:flex-row gap-2 mt-2">
            <button
              onClick={() => handleOpenBlank("https://car-rent-195e4.web.app/")}
              className="w-full btn btn-outline btn-accent rounded-r-3xl rounded-l-3xl"
            >
              Live-link
            </button>

            <button
              onClick={() =>
                handleOpenBlank(
                  "https://github.com/Coder7Raj/Car-Rental-Service-Frontend"
                )
              }
              className="w-full btn btn-outline btn-accent rounded-r-3xl rounded-l-3xl"
            >
              Github Repository
            </button>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="mt-16">
        <div className="w-full lg:h-[480px] md:h-[460px] h-[270px] flex justify-around gap-2 px-2">
          <img
            className="lg:w-[49%] md:w-[49%] w-[45%] lg:h-[460px] md:h-[435px] h-64"
            src="https://i.postimg.cc/N0vYQYVp/src3.png"
            alt="project image"
            onClick={() =>
              handleOpenBlank("https://i.postimg.cc/N0vYQYVp/src3.png")
            }
          />
          <img
            className="lg:w-[49%] md:w-[49%] w-[45%] lg:h-[460px] md:h-[435px] h-64"
            src="https://i.postimg.cc/fbDFHb1n/src4.png"
            alt="project image"
            onClick={() =>
              handleOpenBlank("https://i.postimg.cc/fbDFHb1n/src4.png")
            }
          />
        </div>
        <div>
          <p className="text-white text-2xl">
            GameHive - Game Review Application
          </p>
          <p className="text-[#E5E7EB] mt-2 lg:w-[50%] md:w-[70%] w-full">
            GameHive is a user-friendly game review platform designed to allow
            users to explore, share, and interact with game reviews. With a
            clean and responsive UI, it provides a relaxed and enjoyable space
            for gamers to discover new titles and share their opinions on the
            latest releases.
          </p>
          <div className="grid grid-cols-4 gap-1 lg:w-[50%] md:w-[60%] w-full mt-2">
            <p className="px-2 py-1 rounded-lg bg-gray-300 text-center border-none outline-none">
              TailwindCSS
            </p>
            <p className="px-2 py-1 rounded-lg bg-gray-300 text-center border-none outline-none">
              firebase
            </p>
            <p className="px-2 py-1 rounded-lg bg-gray-300 text-center border-none outline-none">
              ExpressJS
            </p>
            <p className="px-2 py-1 rounded-lg bg-gray-300 text-center border-none outline-none">
              ReactJS
            </p>
          </div>
          <div className="lg:w-[35%] md:w-[35%] flex flex-col md:flex-row lg:flex-row gap-2 mt-2">
            <button
              onClick={() => handleOpenBlank("https://gamer-review.web.app/")}
              className="w-full btn btn-outline btn-accent rounded-r-3xl rounded-l-3xl"
            >
              Live-link
            </button>

            <button
              onClick={() =>
                handleOpenBlank(
                  "https://github.com/Coder7Raj/game-review-frontend"
                )
              }
              className="w-full btn btn-outline btn-accent rounded-r-3xl rounded-l-3xl"
            >
              Github Repository
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
