import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function ContactMe() {
  return (
    <div className="py-4">
      <p className="text-3xl text-accent font-semibold text-center mb-6">
        Contact Me
      </p>
      <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Let's work together
          </h2>
          <p className="text-gray-400 mb-6">
            You can contact me via given description. Always feel free to ask
            questions.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Firstname"
                className="p-2 text-white bg-gray-700 rounded outline-none"
              />
              <input
                type="text"
                placeholder="Lastname"
                className="p-2 text-white bg-gray-700 rounded outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="p-2 text-white bg-gray-700 rounded outline-none"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="p-2 text-white bg-gray-700 rounded outline-none"
              />
            </div>
            <select className="text-gray-200 p-2 bg-gray-700 rounded w-full outline-none">
              <option>Select a service</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>SEO Optimization</option>
            </select>
            <textarea
              placeholder="Type your message here."
              className="p-2 bg-gray-700 text-white rounded w-full h-24 outline-none"
            ></textarea>
            <button className="w-full btn btn-outline btn-accent rounded-r-3xl rounded-l-3xl">
              Send message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="space-y-6 py-4">
          <div className="flex items-center gap-4">
            <FaPhone className="text-accent" size={20} />
            <p className="text-white">+8801560010253,+8801318977357</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-accent" size={20} />
            <p className="text-white">alwaysraj733@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-accent" size={20} />
            <p className="text-white">Dinajpur,Dhaka</p>
          </div>
        </div>
      </div>
    </div>
  );
}
