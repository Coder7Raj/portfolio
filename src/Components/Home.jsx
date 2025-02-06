import React from "react";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import History from "./History";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Technology from "./Technology";

export default function Home() {
  return (
    <div className="max-w-[425px] md:max-w-[768px] lg:max-w-[1200px] mx-auto">
      <section>
        <Navbar></Navbar>
      </section>
      <section className="mt-12">
        <Banner></Banner>
      </section>
      <section className="mt-32">
        <History></History>
      </section>
      <section className="mt-32 px-1">
        <Technology></Technology>
      </section>
      <section className="mt-32 px-1">
        <Projects></Projects>
      </section>
      <section className="mt-32 mb-6 px-1">
        <ContactMe></ContactMe>
      </section>
    </div>
  );
}
