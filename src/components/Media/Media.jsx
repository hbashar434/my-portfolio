import React from "react";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const Media = () => {
  const linkedinUrl = "https://www.linkedin.com/in/habibulbashar434/";
  const facebookUrl = "https://www.facebook.com/h.bashar434";
  const whatsappUrl = "https://wa.me/qr/FNSQ3KOTL3AVH1";

  return (
    <div>
      <h2 className="my-text-second uppercase mb-2">Find me in</h2>
      <div className="flex gap-4">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bannerIcon"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bannerIcon"
        >
          <FaFacebookF />
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bannerIcon"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Media;
