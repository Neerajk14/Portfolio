import React, { useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0o2qkku",
        "template_jyab3jb",
        form.current,
        "p11i_GsnTRWzUIqnT",
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully!✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("Error Sending Message", error);
          toast.error("Failed to send Message. Please Try Again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
      );
  };
  return (
    <>
      <section
        id="contact"
        className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] "
      >
        <ToastContainer />
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Contact</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-md font-semibold">
            I'd love to hear from you-reach out for any apportunities or
            question!
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-start   ">
          <div className="mt-8 w-full md:w-1/2 max-w-md  bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-white text-center">
              Connect with me
            </h3>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-4 flex flex-col space-y-4"
            >
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-400 "
              />
              <input
                type="name"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-400 "
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3 rounded bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-400 "
              />
              <textarea
                name="message"
                placeholder="Message"
                row="4"
                className="w-full p-3 rounded bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-400 "
              ></textarea>
              <button
                type="submit"
                className="w-full bg-linear-to-r from-[#0b6dcf88] to-[#b3d341] py-3 text-white font-semibold rounded-md hover:opacity-90 transition "
              >
                Send
              </button>
            </form>
          </div>
          <div className="mt-10 md:mt-8 md:ml-6 w-full md:w-1/2">
            <div className=" text-white space-y-8">
              <div className="flex items-start">
                <div className=" text-2xl mr-4">
                  <FaMapMarkedAlt />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">Indore ,Madhya Pradesh</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className=" text-2xl mr-4">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">neerajpatel2310@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className=" text-2xl mr-4">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+91- 9713458630</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
