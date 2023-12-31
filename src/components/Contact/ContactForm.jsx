import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FaTelegramPlane } from "react-icons/fa";
import Swal from "sweetalert2";

import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_2k22eb4",
        "template_rbwbvus",
        myForm,
        "m8k4oo6wsfTU6elTW"
      )
      .then(
        (result) => {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "I will respond ASAP.",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {}
      );
  };

  return (
    <form
      id="myForm"
      className=" w-full md:w-[500px] mx-auto"
      data-aos="fade-up-left"
      data-aos-offset="200"
      data-aos-easing="linear"
      data-aos-duration="1000"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-2">
        <label
          htmlFor="name"
          className="block mb-1 font-semibold my-text-second"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="text-red-500">Name is required</span>}
      </div>

      <div className="mb-2">
        <label
          htmlFor="email"
          className="block mb-1 font-semibold my-text-second"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}
      </div>

      <div className="mb-2">
        <label
          htmlFor="subject"
          className="block mb-1 font-semibold my-text-second"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter the subject"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          {...register("subject")}
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="phone"
          className="block mb-1 font-semibold my-text-second"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          {...register("phone")}
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="message"
          className="block mb-1 font-semibold my-text-second"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          rows="3"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && (
          <span className="text-red-500">Message is required</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600"
      >
        <span className="absolute w-[900px] h-0 transition-all duration-300 origin-center rotate-45 -translate-x-72 bg-indigo-600 top-1/2 group-hover:h-[500px] group-hover:-translate-y-32 ease"></span>
        <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
          <span className="flex justify-center items-center gap-2">
            Send Message
            <FaTelegramPlane className=" animate-pulse duration-300" />
          </span>
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
