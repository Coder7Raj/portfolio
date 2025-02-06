import React from "react";
import Tilt from "react-parallax-tilt";
import { Element } from "react-scroll";

export default function Technology() {
  return (
    <Element name="technology">
      <div>
        <p className="text-4xl text-center text-accent">Technology I know</p>
        <p className="text-center text-[#E5E7EB] mt-3">
          As a passionate Frontend Developer, I have experience working with
          modern <br /> web technologies to build interactive and responsive
          applications.
        </p>
        <p className="text-2xl font-semibold text-white mt-12 mb-6">
          Front-End Technology_
        </p>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 px-2 md:px-8 lg:px-0">
          {/* 1 */}
          <Tilt>
            <div className="w-[200px] h-[180px] perspective-[1000px] relative">
              {/* Top-right text */}
              <p className="absolute top-2 right-2 text-sm font-semibold text-white bg-black px-2 py-1 rounded-r-lg rounded-l-lg z-10">
                HTML5
              </p>

              <div className="relative rounded-2xl group transition-all border border-accent cursor-pointer dark:text-white bg-black hover:bg-accent hover:bg-opacity-35 flex justify-center p-3 overflow-hidden">
                <img
                  className="p-6 group-hover:animate-bounce size-[150px] transition-all"
                  src="https://i.ibb.co/Ns0mvQf/html5.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>
          {/* 2 */}
          <Tilt>
            <div className="w-[200px] h-[180px] perspective-[1000px] relative">
              {/* Top-right text */}
              <p className="absolute top-2 right-2 text-sm font-semibold text-white bg-black px-2 py-1 rounded-r-lg rounded-l-lg z-10">
                CSS3
              </p>

              <div className="relative rounded-2xl group transition-all border border-accent cursor-pointer dark:text-white bg-black hover:bg-accent hover:bg-opacity-35 flex justify-center p-3 overflow-hidden">
                <img
                  className="p-6 group-hover:animate-bounce size-[150px] transition-all"
                  src="https://i.ibb.co/1GzSwm8/css3.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>
          {/* 3 */}
          <Tilt>
            <div className="w-[200px] h-[180px] perspective-[1000px] relative">
              {/* Top-right text */}
              <p className="absolute top-2 right-2 text-sm font-semibold text-white bg-black px-2 py-1 rounded-r-lg rounded-l-lg z-10">
                TailwindCSS
              </p>

              <div className="relative rounded-2xl group transition-all border border-accent cursor-pointer dark:text-white bg-black hover:bg-accent hover:bg-opacity-35 flex justify-center p-3 overflow-hidden">
                <img
                  className="p-6 group-hover:animate-bounce size-[150px] transition-all"
                  src="https://i.ibb.co/2ZfCjX0/tailwindcss.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>
          {/* 4 */}
          <Tilt>
            <div className="w-[200px] h-[180px] perspective-[1000px] relative">
              {/* Top-right text */}
              <p className="absolute top-2 right-2 text-sm font-semibold text-white bg-black px-2 py-1 rounded-r-lg rounded-l-lg z-10">
                DaisyUI
              </p>

              <div className="relative rounded-2xl group transition-all border border-accent cursor-pointer dark:text-white bg-black hover:bg-accent hover:bg-opacity-35 flex justify-center p-3 overflow-hidden">
                <img
                  className="p-6 group-hover:animate-bounce size-[150px] transition-all"
                  src="https://i.postimg.cc/yxb0pGQ5/image.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>
          {/* 5 */}
          <Tilt>
            <div className="w-[200px] h-[180px] perspective-[1000px] relative">
              {/* Top-right text */}
              <p className="absolute top-2 right-2 text-sm font-semibold text-white bg-black px-2 py-1 rounded-r-lg rounded-l-lg z-10">
                javascript
              </p>

              <div className="relative rounded-2xl group transition-all border border-accent cursor-pointer dark:text-white bg-black hover:bg-accent hover:bg-opacity-35 flex justify-center p-3 overflow-hidden">
                <img
                  className="p-6 group-hover:animate-bounce size-[150px] transition-all"
                  src="https://i.ibb.co/VBJgmgv/javascript.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>
          {/* 6 */}
          <Tilt>
            <div className="w-[200px] h-[180px] perspective-[1000px] relative">
              {/* Top-right text */}
              <p className="absolute top-2 right-2 text-sm font-semibold text-white bg-black px-2 py-1 rounded-r-lg rounded-l-lg z-10">
                ReactJS
              </p>

              <div className="relative rounded-2xl group transition-all border border-accent cursor-pointer dark:text-white bg-black hover:bg-accent hover:bg-opacity-35 flex justify-center p-3 overflow-hidden">
                <img
                  className="p-6 group-hover:animate-bounce size-[150px] transition-all"
                  src="https://i.ibb.co/sW5JBYT/reactjs.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>
          {/* 7 */}
          <Tilt>
            <div className="w-[200px] h-[180px] perspective-[1000px] relative">
              {/* Top-right text */}
              <p className="absolute top-2 right-2 text-sm font-semibold text-white bg-black px-2 py-1 rounded-r-lg rounded-l-lg z-10">
                Bootstrap
              </p>

              <div className="relative rounded-2xl group transition-all border border-accent cursor-pointer dark:text-white bg-black hover:bg-accent hover:bg-opacity-35 flex justify-center p-3 overflow-hidden">
                <img
                  className="p-6 group-hover:animate-bounce size-[150px] transition-all"
                  src="https://i.ibb.co/L5LMsPQ/bootstrap.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>

          {/*  */}
        </div>
        <p className="text-2xl font-semibold text-white mt-12 mb-6">
          Back-End Technology_
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 px-2 md:px-8 lg:px-12">
          {/* 1 */}
          <Tilt>
            <div className="w-[200px] h-[180px] perspective-[1000px] relative">
              {/* Top-right text */}
              <p className="absolute top-2 right-2 text-sm font-semibold text-white bg-black px-2 py-1 rounded-r-lg rounded-l-lg z-10">
                MongoDB
              </p>

              <div className="relative rounded-2xl group transition-all border border-accent cursor-pointer dark:text-white bg-black hover:bg-accent hover:bg-opacity-35 flex justify-center p-3 overflow-hidden">
                <img
                  className="p-6 group-hover:animate-bounce size-[150px] transition-all"
                  src="https://i.ibb.co/WGVjtbX/mongodb.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>
          {/* 2 */}
          <Tilt>
            <div className="w-[200px] h-[180px] perspective-[1000px] relative">
              {/* Top-right text */}
              <p className="absolute top-2 right-2 text-sm font-semibold text-white bg-black px-2 py-1 rounded-r-lg rounded-l-lg z-10">
                ExpressJS
              </p>

              <div className="relative rounded-2xl group transition-all border border-accent cursor-pointer dark:text-white bg-black hover:bg-accent hover:bg-opacity-35 flex justify-center p-3 overflow-hidden">
                <img
                  className="p-6 group-hover:animate-bounce size-[150px] transition-all"
                  src="https://i.ibb.co/wJDDjpc/expressjs.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>
          {/* 3 */}
          <Tilt>
            <div className="w-[200px] h-[180px] perspective-[1000px] relative">
              {/* Top-right text */}
              <p className="absolute top-2 right-2 text-sm font-semibold text-white bg-black px-2 py-1 rounded-r-lg rounded-l-lg z-10">
                NodeJS
              </p>

              <div className="relative rounded-2xl group transition-all border border-accent cursor-pointer dark:text-white bg-black hover:bg-accent hover:bg-opacity-35 flex justify-center p-3 overflow-hidden">
                <img
                  className="p-6 group-hover:animate-bounce size-[150px] transition-all"
                  src="https://i.ibb.co/g6D3GsT/nodejs.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>

          {/*  */}
        </div>
        <p className="text-2xl font-semibold text-white mt-12 mb-6">
          Others Technology_
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1 md:px-8 lg:px-10 px-1">
          {/* 1 */}
          <Tilt>
            <div className="w-[200px] h-[180px] perspective-[1000px] relative">
              {/* Top-right text */}
              <p className="absolute top-2 right-2 text-sm font-semibold text-white bg-black px-2 py-1 rounded-r-lg rounded-l-lg z-10">
                NPM
              </p>

              <div className="relative rounded-2xl group transition-all border border-accent cursor-pointer dark:text-white bg-black hover:bg-accent hover:bg-opacity-35 flex justify-center p-3 overflow-hidden">
                <img
                  className="p-6 group-hover:animate-bounce size-[150px] transition-all"
                  src="https://i.ibb.co/Zd51cmf/npm.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>
          {/* 2 */}
          <Tilt>
            <div className="w-[200px] h-[180px] perspective-[1000px] relative">
              {/* Top-right text */}
              <p className="absolute top-2 right-2 text-sm font-semibold text-white bg-black px-2 py-1 rounded-r-lg rounded-l-lg z-10">
                Git
              </p>

              <div className="relative rounded-2xl group transition-all border border-accent cursor-pointer dark:text-white bg-black hover:bg-accent hover:bg-opacity-35 flex justify-center p-3 overflow-hidden">
                <img
                  className="p-6 group-hover:animate-bounce size-[150px] transition-all"
                  src="https://i.ibb.co/gJNnM1S/git.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>
          {/* 3 */}

          <Tilt>
            <div className="w-[200px] h-[180px] perspective-[1000px] relative">
              {/* Top-right text */}
              <p className="absolute top-2 right-2 text-sm font-semibold text-white bg-black px-2 py-1 rounded-r-lg rounded-l-lg z-10">
                Figma
              </p>

              <div className="relative rounded-2xl group transition-all border border-accent cursor-pointer dark:text-white bg-black hover:bg-accent hover:bg-opacity-35 flex justify-center p-3 overflow-hidden">
                <img
                  className="p-6 group-hover:animate-bounce size-[150px] transition-all"
                  src="https://i.ibb.co/sQ6mHJw/figma.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>
          {/* 4 */}
          <Tilt>
            <div className="w-[200px] h-[180px] perspective-[1000px] relative">
              {/* Top-right text */}
              <p className="absolute top-2 right-2 text-sm font-semibold text-white bg-black px-2 py-1 rounded-r-lg rounded-l-lg z-10">
                VScode
              </p>

              <div className="relative rounded-2xl group transition-all border border-accent cursor-pointer dark:text-white bg-black hover:bg-accent hover:bg-opacity-35 flex justify-center p-3 overflow-hidden">
                <img
                  className="p-6 group-hover:animate-bounce size-[150px] transition-all"
                  src="https://i.ibb.co/17zCq0t/visual-studio-code.png"
                  alt=""
                />
              </div>
            </div>
          </Tilt>

          {/*  */}
        </div>
      </div>
    </Element>
  );
}
