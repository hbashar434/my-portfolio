import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Title from "../Title/Title";
import banner from "../../assets/banner/banner.jpg";


const Contact = () => {

  return (
    <section id="contact" className="w-full md:px-4 py-10">
      <Title title="Let's Connect" des="Contact With Me." />
      <div
        style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}
        className="flex flex-col md:flex-row violet-gradient rounded-md p-6 overflow-hidden"
      >
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
