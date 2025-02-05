import React from "react";
import About from "./About";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Technology from "./Technology";

export default function Home() {
  return (
    <div className="max-w-[425px] md:max-w-[768px] lg:max-w-[1200px] mx-auto border border-red-600">
      <section>
        <Navbar></Navbar>
      </section>
      <section className="mt-12">
        <Banner></Banner>
      </section>
      <Technology></Technology>
      <Projects></Projects>
      <About></About>
    </div>
  );
}
