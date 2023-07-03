import React from "react";
import { FaFacebookF, FaDiscord, FaLinkedinIn } from "react-icons/fa";

const Media = () => {
  const linkedinUrl = "https://www.linkedin.com/in/habibulbashar434/";
  const facebookUrl = "https://www.facebook.com/h.bashar434";
  const discordUrl = "https://discord.com/channels/@me/h.bashar";

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
          href={discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bannerIcon"
        >
          <FaDiscord />
        </a>
      </div>
    </div>
  );
};

export default Media;
