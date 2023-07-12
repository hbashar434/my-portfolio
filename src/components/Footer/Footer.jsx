import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

const linkedinUrl = "https://www.linkedin.com/in/habibulbashar434/";
const facebookUrl = "https://www.facebook.com/h.bashar434";
const whatsappUrl = "https://wa.me/qr/FNSQ3KOTL3AVH1";
const githubUrl = "https://github.com/hbashar434";

const Footer = () => {
  return (
    <footer className="black-gradient py-8">
      <div className=" container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="my-text-second flex flex-col items-start">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="mt-2 text-base md:text-lg">Dhaka, Bangladesh</p>
            <p className="text-base md:text-lg my-text-second flex items-center gap-2">
              Phone: <span className="my-text-second">+880 1613506705</span>
            </p>
            <p className="text-base md:text-lg my-text-second flex items-center gap-2">
              Email:{" "}
              <span className="my-text-second">
                habibul.bashar434@gmail.com
              </span>
            </p>
          </div>
          <div className="my-text-second text-center flex flex-col justify-center items-center col-span-2">
            <h4 className="text-2xl md:text-5xl font-extrabold md:font-bold">Let&apos;s Work Together...</h4>
            <p className="text-xl md:text-2xl mt-4">How do you take your coffee?</p>
            <div className="flex justify-center md:justify-start mt-6">
              <IconContext.Provider
                value={{
                  className: "my-text-second text-xl mx-3 animate-bounce",
                }}
              >
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaFacebook size={32} />
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaLinkedin size={32} />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaWhatsapp size={32} />
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaGithub size={32} />
                </a>
              </IconContext.Provider>
            </div>
          </div>
        </div>

        <hr className="border-white my-6" />
        <p className="text-center my-text-second text-sm  md:text-lg">
          &copy; {new Date().getFullYear()} Habibul Bashar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
