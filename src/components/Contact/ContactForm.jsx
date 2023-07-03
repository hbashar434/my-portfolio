import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
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
          console.log(result.text);
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      id="myForm"
      className="md:w-6/12 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-2">
        <label htmlFor="name" className="block mb-1 font-bold text-gray-700">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="text-red-500">Name is required</span>}
      </div>

      <div className="mb-2">
        <label htmlFor="email" className="block mb-1 font-bold text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="phone" className="block mb-1 font-bold text-gray-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <span className="text-red-500">Phone number is required</span>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="subject" className="block mb-1 font-bold text-gray-700">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <span className="text-red-500">Subject is required</span>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="message" className="block mb-1 font-bold text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
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
        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
          Send Message
        </span>
      </button>
    </form>
  );
};

export default ContactForm;